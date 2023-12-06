import React from 'react';
import { useQuery } from 'react-query';
import api from '../../../network/network';
import Loading from '../../../additional/Loading';
import { toast } from 'react-toastify';

const ManageUserReviews = () => {
    // Load the Profile info
    const {
      data: reviews,
      isLoading,
      refetch,
    } = useQuery("reviews", () =>
      fetch(`${api}/reviews`).then((res) => res.json())
    );

    if (isLoading) {
    return <Loading></Loading>;
    }
    
    const handleDeleteOder = (id) => {
      console.log(id)
      // fetch(`https://localhost:5000/reviews/${id}`, {
      fetch(`${api}/reviews/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            refetch();
            toast.success("Review Delete Successfully");
          } else {
            toast.warning("something want wrong");
          }
        })
        .catch((err) => {
          toast.error("Something want Wrong");
          console.log(err);
        });
      };
  return (
    <div className="min-h-screen w-full px-4 mx-auto lg:pt-20 ">
      <h1 className='text-secondary font-["Aclonica"] text-4xl font-light text-center mt-0 mb-6'>
        Manage All Reviews: {reviews?.length}
      </h1>
      <div className="overflow-x-auto ">
        <table className="table w-[100%] border-collapse border border-primary">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th className="border border-primary px-1">Index</th>
              <th className="border border-primary">User Name</th>
              <th className="border border-primary">Country</th>
              <th className="border border-primary">Review</th>
              <th className="border border-primary">Action</th>
            </tr>
          </thead>

          <tbody>
            {reviews?.map((review, index) => (
              <tr key={review._id}>
                <th className="border border-primary">{index + 1}</th>
                <td className="border border-primary">{review.name}</td>
                <td className="border border-primary text-center py-0">
                  {review.country}
                </td>
                <td
                  title={review.review}
                  className="border border-primary text-center py-0"
                >
                  {review.review.length > 50
                    ? `${review.review.slice(0, 50)}...`
                    : review.review}
                </td>
                <th className="border border-primary">
                  <div className="items-center justify:start">
                    <button
                      onClick={() => handleDeleteOder(review._id)}
                      className="btn bg-primary border-primary rounded hover:border-primary hover:bg-white hover:text-primary"
                    >
                      Delete
                    </button>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUserReviews;