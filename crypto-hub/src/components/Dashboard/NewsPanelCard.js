const NewsPanelCard = ({ news, contentCount = 50, headSize = 'text-xs' }) => {
    const { title, author, summary, link } = news
    return (
        <a href={link}>
            <div className=" bg-white rounded-sm  shadow-xl hover:shadow-xl  duration-200 transform transition cursor-pointer">
                <div className="p-5">
                    <h1 className={`${headSize} font-bold`}>{title}</h1>
                    <p className="mt-1 text-xs font-semibold text-green-500">by {author}</p>
                    <p className="mt-1 text-gray-500 text-xs">{summary.slice(0, contentCount) + '...'}
                    </p>
                </div>
            </div>
        </a>
    )
}

export default NewsPanelCard
