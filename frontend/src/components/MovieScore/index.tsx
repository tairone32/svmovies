import MovieStar from "components/MovieStars";
import './style.css';

type Props = {
    score: number;
    count:number;
}

function MovieScore({ score, count} : Props) {

    return (
        <div className="svmovie-score-container">
            <p className="svmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStar score ={score} />
            <p className="svmovie-score-count">{count} avaliações</p>
        </div>

    );
}

export default MovieScore;