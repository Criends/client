export default function LoginForm() {
  return (
    <form className="flex flex-col gap-2">
      <fieldset className="flex flex-col gap-2">
        <input
          type="text"
          className="bg-[#eeeeee] px-4 py-2 rounded-full outline-none"
        />
        <input
          type="password"
          className="bg-[#eeeeee] px-4 py-2 rounded-full outline-none"
        />
      </fieldset>
      <button className="bg-brand w-full px-2 py-2 rounded-full text-white">
        로그인
      </button>
    </form>
  );
}
