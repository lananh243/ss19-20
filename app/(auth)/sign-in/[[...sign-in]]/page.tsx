import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="p-6">
      <b className="text-xl">Trang đã đăng xuất</b>
      <SignIn />
    </div>
  );
}
