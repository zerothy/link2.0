export default function Logo() {
    const handleClick = () => {
        console.log('clicked'); //TODO: Add link to home page
    }

    return (
        <div className='w-14 ml-[3.6rem] pt-4 cursor-pointer' onClick={handleClick}>
            <img src='/images/Link.png' alt='Link Logo' draggable='false' />
        </div>
    );
}