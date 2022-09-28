const Twitter = ({ className, dark }) => {
    return (
        <a href="https://twitter.com/knox_finance" target="_blank" className={className}>
            {dark ?  <img src="/images/twitter-dark.png" /> :  <img  src="/images/twitter.png"/>}
        </a>
    );
}

export default Twitter;