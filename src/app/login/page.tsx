import LoginForm from "@/components/LoginForm";
import Main from "@/components/Main";
import SocialLoginContainer from "@/components/SocialLoginContainer";

export default function page() {
  return (
    <Main>
      <section className="w-80 mx-auto mt-40">
        <LoginForm />

        <div className="flex justify-center items-center my-5">
          <hr className="flex-grow border-t border-brand" />
          <span className="px-3 text-sm">또는</span>
          <hr className="flex-grow border-t border-brand" />
        </div>

        <SocialLoginContainer />
      </section>
    </Main>
  );
}
