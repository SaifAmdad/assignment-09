const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center gap-3 h-[30vh]">
      <h1 className="text-indigo-600 font-semibold text-xl">Loading</h1>
      <span className="loading loading-dots loading-lg text-indigo-600"></span>
    </div>
  );
};

export default LoadingPage;
