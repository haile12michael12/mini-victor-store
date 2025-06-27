import React, { useEffect, useState } from "react";
import CommentsList from "./CommentLists";
import { useDispatch, useSelector } from "react-redux";
import { createCommentAction } from "../../redux/slices/comments/commentsSlice";

const AddComment = ({ postId, comments }) => {
  const [formData, setFormData] = useState({ message: "" });
  const dispatch = useDispatch();

  const { success } = useSelector((state) => state?.comments);

  useEffect(() => {
    if (success) {
      setFormData({ message: "" }); // reset form
      // Optionally show a toast or animation instead of reload
    }
  }, [success]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.message.trim()) return alert("Comment can't be empty");
    dispatch(createCommentAction({ ...formData, postId }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8 transition-transform duration-300 hover:shadow-2xl">
      <h3 className="text-2xl font-bold text-blue-600 mb-6 animate-fade-in-down">
        Join the Discussion 💬
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in-up">
        <div className="flex items-start space-x-4">
          <img
            src="https://api.dicebear.com/7.x/thumbs/svg?seed=User"
            alt="user avatar"
            className="w-12 h-12 rounded-full border shadow"
          />
          <div className="w-full">
            <textarea
              name="message"
              rows="4"
              className="w-full px-4 py-3 text-sm text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm resize-none"
              placeholder="Write something thoughtful..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <div className="flex justify-end mt-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 hover:scale-105 transition-all duration-200 focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Comments List */}
      <div className="mt-8">
        <CommentsList comments={comments} />
      </div>
    </div>
  );
};

export default AddComment;
