import {ReactComponent as Arrow} from 'assets/img/arrow.svg'
import './style.css'

function Pagination() {

    return (
        <div className="svmovie-pagination-container">
            <div className="svmovie-pagination-box">
                <button className="svmovie-pagination-button" disabled={true} >
                    <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="svmovie-pagination-button" disabled={false} >
                    <Arrow className="svmovie-flip-horizontal" />
                </button>
            </div>
        </div>

    );
}

export default Pagination;