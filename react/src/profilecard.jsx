const Profilecard = ({ index, avatar, frame, role }) => {
  const handleClick = () => {
    alert(`you followed ${fname}`);
  };
  return (
    <div key={index}>
      <div className="">
        <img
          class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
          src={avatar}
          alt={`${fname}s avatar`}
        />
        <h2>{fname}</h2>
        <h3 class="font-medium">{role}</h3>
        <button className="border-purple-200">follow</button>
      </div>
    </div>
  );
};
export default Profilecard;
