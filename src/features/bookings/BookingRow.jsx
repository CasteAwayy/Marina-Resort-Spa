import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
    HiTrash,
    HiEye,
    HiArrowUpOnSquare,
    HiArrowDownOnSquare,
} from "react-icons/hi2";
import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import { format, isToday } from "date-fns";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";
import Tag from "../../ui/Tag";
import Modal from "../../ui/Modal";
import { useCheckout } from "../check-in-out/useCheckout";
import { useDeleteBooking } from "./useDeleteBooking";
import ConfirmDelete from "../../ui/ConfirmDelete";

const Cabin = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-grey-600);
    font-family: "Sono";
`;

const Stacked = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    & span:first-child {
        font-weight: 500;
    }

    & span:last-child {
        color: var(--color-grey-500);
        font-size: 1.2rem;
    }
`;

const Amount = styled.div`
    font-family: "Sono";
    font-weight: 500;
`;

function BookingRow({
    booking: {
        id: bookingId,
        startDate,
        endDate,
        numNights,
        totalPrice,
        status,
        guests: { fullName: guestName, email },
        cabins: { name: cabinName },
    },
}) {
    const { deleteBooking, isDeleting } = useDeleteBooking();
    const { checkout, isCheckingOut } = useCheckout();

    const navigate = useNavigate();

    const statusToTagName = {
        unconfirmed: "blue",
        "checked-in": "green",
        "checked-out": "silver",
    };

    return (
        <Table.Row role="row">
            <Cabin>{cabinName}</Cabin>

            <Stacked>
                <span>{guestName}</span>
                <span>{email}</span>
            </Stacked>

            <Stacked>
                <span>
                    {isToday(new Date(startDate))
                        ? "Today"
                        : formatDistanceFromNow(startDate)}{" "}
                    &rarr; {numNights} night stay
                </span>
                <span>
                    {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
                    {format(new Date(endDate), "MMM dd yyyy")}
                </span>
            </Stacked>

            <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

            <Amount>{formatCurrency(totalPrice)}</Amount>

            <Modal>
                <Menus.Menu>
                    <Menus.Toggle id={bookingId} />
                    <Menus.List id={bookingId}>
                        <Menus.Button
                            onClick={() => navigate(`/bookings/${bookingId}`)}
                            icon={<HiEye />}
                        >
                            See details
                        </Menus.Button>

                        {status === "unconfirmed" && (
                            <Menus.Button
                                onClick={() =>
                                    navigate(`/checkin/${bookingId}`)
                                }
                                icon={<HiArrowDownOnSquare />}
                            >
                                Check in
                            </Menus.Button>
                        )}

                        {status === "checked-in" && (
                            <Menus.Button
                                onClick={() => checkout(bookingId)}
                                disabled={isCheckingOut}
                                icon={<HiArrowUpOnSquare />}
                            >
                                Check out
                            </Menus.Button>
                        )}
                        <Modal.Open opens="delete">
                            <Menus.Button icon={<HiTrash />}>
                                Delete booking
                            </Menus.Button>
                        </Modal.Open>
                    </Menus.List>
                </Menus.Menu>

                <Modal.Window name="delete">
                    <ConfirmDelete
                        resourceName="booking"
                        // These options will be passed wherever the function gets called, and they determine what happens next
                        onConfirm={() => deleteBooking(bookingId)}
                        disabled={isDeleting}
                    />
                </Modal.Window>
            </Modal>
        </Table.Row>
    );
}

export default BookingRow;
