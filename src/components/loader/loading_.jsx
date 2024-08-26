import loading from './loading.mp4';

const Loading = () => {
    return (
        <div className='w-[100%] h-[100%] flex justify-center'>
            <video className='h-[100%] w-auto' src={loading} autoPlay={true} muted={true} loop={true}/>
        </div>
    )
}

export default Loading;