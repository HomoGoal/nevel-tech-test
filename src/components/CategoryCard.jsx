const CategoryCard = ({item}) => {
    return (
        <div className="category-card">
            <div className="category-card-col">
                <div className="category-card-content-wrap">
                    <div className={`category-card-content-inner ${item.type}`}>
                        <img src={item.icon} alt="icon"/>
                        <p className="category-card-title p10">{item.title}</p>
                        <p className="category-card-text p7">{item.text}</p>
                    </div>
                </div>
                <div className="body-category-list-image">
                    {item.listImg1.map((image, listImg1Index) => 
                        <img src={image} key={listImg1Index} className="body-category-image" alt="category image"/>
                    )}
                </div>
            </div>
            <div className="category-card-col">
                <div className="body-category-list-image">
                    {item.listImg2.map((image, listImg2Index) => 
                        <img src={image} key={listImg2Index} className="body-category-image" alt="category image"/>
                    )}
                </div>
                <img src={item.mainImg} className="body-category-image" alt="category image"/>
            </div>
        </div>
    )
}

export default CategoryCard;