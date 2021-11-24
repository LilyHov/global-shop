const SluggedPage = ({ data = {} }) => {
    function createMarkup(data) {
        return { __html: data };
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: 20 }}>{data.title}</h1>
            <div dangerouslySetInnerHTML={createMarkup(data.body)} />
        </div>
    );
};

export default SluggedPage;