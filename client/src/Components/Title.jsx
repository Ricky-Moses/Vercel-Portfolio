
const Title = ({
    bgTitle,
    headTitle,
    bgFontSize,
    headFontSize,
    height,
    width
}) => {
    return (
        <div
            style={{ height: height }}
            className="page_titles text-white">
            <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                <h1
                    style={{ fontSize: bgFontSize }}
                    className="word-break font-extrabold tracking-wider opacity-5">
                    {bgTitle}
                </h1>
                <h1 
                    style={{fontSize: headFontSize, width}}
                className="font-bold text-center">{headTitle}</h1>
            </div>
        </div>
    )
}

export default Title