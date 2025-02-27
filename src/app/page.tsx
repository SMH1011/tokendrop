import TokenInfo from "@/app/components/TokenInfo";
import Login from "@/app/components/Login";
import TokenDrop from "@/app/components/TokenDrop";
import Transfer from "@/app/components/Transfer";
 export default function Home() {
  return (
   <main className="min-h-screen bg-gray-100 flex flex-col justify-center">
    <div className="w-full max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
      <div className="relative p-4 bg-white shadow-lg sm:rounded-3xl ">
        <h1 className="text-2xl font-bold mb-5 text-center text-gray-800">
          ERC-20 Token Drop Tester
        </h1>
         <Login />
         <TokenInfo />
         <TokenDrop />
         <Transfer />
        </div>
        </div>
        </main>
        );
}