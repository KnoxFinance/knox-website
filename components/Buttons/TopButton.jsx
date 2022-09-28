const TopButton = () => {
    const goToAnchor = () => {
        window.location = (""+window.location).replace(/#[A-Za-z0-9_]*$/,'')+"#vaults";
      }
    return (
        <div onClick={() => goToAnchor()} className="rounded-lg cursor-pointer  px-4 py-2 font-medium leading-[1] text-sm text-white uppercase bg-gradient-to-r  from-knox-purple to-knox-yellow via-knox-orange">
            Vaults
        </div>
    );
}

export default TopButton;