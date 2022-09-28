const Discord = ({ className, id, dark }) => {
    return (
        <a id={id} href="https://discord.gg/KKBzGQ3YAa" target="_blank" className={className}>
{dark ?  <img src="/images/discord-dark.png" /> :  <img  src="/images/discord.png"/>}
        
        </a>
    );
}

export default Discord;