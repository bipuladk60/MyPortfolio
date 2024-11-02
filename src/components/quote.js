function Quote({ Header, Title, Body, HyperLink, Link }) {
    return(
        <div>
            <div className="text-center p-4 mt-10 md:mt-20">
                <h1 className="text-3xl md:text-5xl font-bold font-heading">{Header}</h1>
                <h2 className="text-lg md:text:3xl font-semibold mt-4">{Title}</h2>
                <p className="text-sm md:text-2xl font-normal font-body mt-4">{Body}</p>
                <a href={Link} className="text-lg md:text-2xl text-primary text-sm font-body underline">{HyperLink}</a>
            </div>
        </div>
    )
}

export default Quote;