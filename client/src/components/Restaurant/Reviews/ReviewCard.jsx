import React, { useEffect, useState } from "react";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import { TiStarFullOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { getUser } from "../../../app/store";
// Extend dayjs with the relativeTime plugin
dayjs.extend(relativeTime);

//Redux
function ReviewCard(props) {
  const dispatch = useDispatch();
  const [user, setUser] = useState();

  useEffect(() => {
    dispatch(getUser(props.user)).then((data) => {
      setUser(data.payload.user.fullName);
    });
  }, []);
  return (
    <>
      <div className="my-3 flex flex-col gap-1 border-b border-gray-300 p-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-row gap-3">
            <div className="w-10 h-10 rounded-full">
              <img
                src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png"
                alt="user"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">{user}</h3>
              <small className="text-gray-500">
                5 Reviews &#8226; 3 Followers
              </small>
            </div>
          </div>
          <button className="text-zomato-400 border border-zomato-400 py-2 rounded-lg px-4">
            Fllow
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1 ">
              {props.rating} <TiStarFullOutline />
            </span>
            <h5 className="text-xs text-gray-700 uppercase">
              {props.isResturantReview ? "Dining" : "delivery"}
            </h5>
            <small className="text-gray-500">
              {dayjs(props.createdAt).fromNow()}
            </small>
          </div>
          <div className="w-full ">
            <p className="w-full text-gray-600 font-light text-base">
              {props.reviewText}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
