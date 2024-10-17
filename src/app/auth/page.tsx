import LoginForm from "@/components/LoginForm";
import SocialLoginContainer from "@/components/SocialLoginContainer";

export default function page() {
  return (
    <section className="w-80">
      <LoginForm />

      <div className="flex justify-center items-center my-5">
        <hr className="flex-grow border-t border-brand" />
        <span className="px-3 text-sm">또는</span>
        <hr className="flex-grow border-t border-brand" />
      </div>

      <SocialLoginContainer />
    </section>
  );
}
