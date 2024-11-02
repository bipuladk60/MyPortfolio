function Quote({ Header, Title, Body, HyperLink, Link }) {
    return(
        <div>
            <div className="text-center p-5 mt-10 md:mt-20 flex flex-col">
                <h1 className="text-3xl md:text-5xl font-bold font-heading text-white">{Header}</h1>
                <h2 className="text-lg md:text:3xl font-semibold mt-4 text-text">{Title}</h2>
                <p className="text-sm md:text-2xl font-normal font-body mt-4 text-text">{Body}</p>
                <a href={Link} target="_blank" rel="noreferrer" className="text-lg md:text-2xl text-primary text-sm font-body underline mt-4">{HyperLink}</a>
            </div>
        </div>
    )
}

export default Quote;