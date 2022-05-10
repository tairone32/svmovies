import MovieStar from "components/MovieStars";
import './style.css';

function MovieScore() {

    const score = 3.5;
    const count = 13;

    return (
        <div className="svmovie-score-container">
            <p className="svmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStar />
            <p className="svmovie-score-count">{count} avaliações</p>
        </div>

    );
}

export default MovieScore;