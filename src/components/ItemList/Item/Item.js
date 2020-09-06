import React from 'react'
import './Item.css'

const Item = ({ title, labels, created_at, number, user }) => {

    const getDiffDays = (date) => {
        const oneDay = 24 * 60 * 60 * 1000;
        let today = new Date();
        let dateTranform = new Date(date);
        let diffDays = Math.round(Math.abs((today - dateTranform) / oneDay));
        return diffDays;
    }

    let dateFormater = '';
    let days = getDiffDays(created_at);
    if (days === 1) {
        dateFormater = `Yesteday`;
    } else if (days === 0) {
        dateFormater = `Today`;
    } else {
        dateFormater = `${days} days ago`;
    }


    return (<div>
        <div className="item-container">
            <div className="item-header">
                <div className="item-title">
                    <a href={'https://github.com/facebook/react/issues/' + number} target="_blank">{title}</a>
                </div>
                <div className="labels-container">
                    {labels.map(label =>
                        <span
                            className="item-labels"
                            key={label.id}
                            style={{ backgroundColor: '#' + label.color }}
                        >{label.name}</span>)}
                </div>
            </div>
            <div className="item-footer">
                <span className="repo-info">{`#${number}  opened ${dateFormater}  by ${user.login}`}</span>
                </div>

        </div>
    </div>
    )


}


export default Item;