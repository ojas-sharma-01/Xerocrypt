import Header from "../header/header";

const Four04 = () => {
    return (
        <div className="h-screen max-w-[100%] overflow-x-hidden flex flex-col justify-center text-white">
            <Header />
            <div className="h-full flex flex-col justify-center"> 
                <div className="text-[150px] font-cus2 text-green-500">404</div>
                <div className="text-[30px] font-custom"> Page Not found. </div>
            </div>
        </div>
    )
}

export default Four04;