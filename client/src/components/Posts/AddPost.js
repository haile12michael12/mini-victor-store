import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { fetchCategoriesAction } from "../../redux/slices/categories/categoriesSlice";
import { addPostAction } from "../../redux/slices/posts/postsSlice";
import LoadingComponent from "../Alert/LoadingComponent";
import ErrorMsg from "../Alert/ErrorMsg";
import SuccesMsg from "../Alert/SuccesMsg";

const AddPost = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const { categories } = useSelector((state) => state?.categories);
  const { post, error, loading, success } = useSelector((state) => state?.posts);

  const options = categories?.categories?.map((category) => ({
    value: category?._id,
    label: category?.name,
  }));

  useEffect(() => {
    dispatch(fetchCategoriesAction());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    title: "",
    image: null,
    category: null,
    content: "",
  });

  const validateForm = (data) => {
    const errors = {};
    if (!data.title) errors.title = "Title is required";
    if (!data.image) errors.image = "Image is required";
    if (!data.category) errors.category = "Category is required";
    if (!data.content) errors.content = "Content is required";
    return errors;
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    const formErrors = validateForm(formData);
    setErrors({ ...errors, [name]: formErrors[name] });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (selectedOption) => {
    setFormData({ ...formData, category: selectedOption.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      dispatch(addPostAction(formData));
      setFormData({
        title: "",
        image: null,
        category: null,
        content: "",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-100 via-white to-green-50 px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-10 animate-fade-in-up"
      >
        <h2 className="text-3xl font-bold text-green-600 text-center mb-2">Create a New Post</h2>
        <p className="text-center text-gray-500 mb-6">
          Inspire the world with your ideas.
        </p>

        {error && <ErrorMsg message={error?.message} />}
        {success && <SuccesMsg message="Post created successfully" />}

        {/* Title */}
        <label className="block mb-4">
          <span className="block mb-1 text-gray-700 font-medium">Title</span>
          <input
            type="text"
            name="title"
            placeholder="e.g. 10 Tips for Productivity"
            value={formData.title}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors?.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </label>

        {/* Image */}
        <label className="block mb-4">
          <span className="block mb-1 text-gray-700 font-medium">Image</span>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            onBlur={handleBlur}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-100 file:text-green-700 hover:file:bg-green-200"
          />
          {errors?.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
        </label>

        {/* Category */}
        <label className="block mb-4">
          <span className="block mb-1 text-gray-700 font-medium">Category</span>
          <Select
            options={options}
            placeholder="Choose category"
            onChange={handleSelectChange}
            onBlur={handleBlur}
            className="text-gray-700"
            theme={(theme) => ({
              ...theme,
              borderRadius: 10,
              colors: {
                ...theme.colors,
                primary25: "#D1FAE5",
                primary: "#10B981",
              },
            })}
          />
          {errors?.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
        </label>

        {/* Content */}
        <label className="block mb-6">
          <span className="block mb-1 text-gray-700 font-medium">Content</span>
          <textarea
            name="content"
            rows={6}
            placeholder="Write your post content..."
            value={formData.content}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors?.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
        </label>

        {/* Submit Button */}
        {loading ? (
          <LoadingComponent />
        ) : (
          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold text-white bg-green-600 hover:bg-green-700 rounded-lg transition-all shadow-md"
          >
            Submit Post
          </button>
        )}
      </form>
    </div>
  );
};

export default AddPost;
