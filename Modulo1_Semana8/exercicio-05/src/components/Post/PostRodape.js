export default function PostRodape({
    numeroCurtidas, curtidoPor
}) {
    return (
        <div>
            <div className="FooterUp">
                <div className="HeartComments">
                    <img
                        className="Heart"
                        src={
                            numeroCurtidas >= 1
                                ? "https://img.icons8.com/color/48/000000/hearts.png"
                                : "https://img.icons8.com/windows/32/FA5252/hearts.png"
                        }
                        alt="curtir"
                    />
                    <span>Comentários</span>
                </div>
                <p>Compartilhar</p>
            </div>

            {numeroCurtidas >= 1 && (
        <p className="Liked">
          Curtido por {" "}
          <strong>
            {curtidoPor} and {numeroCurtidas} others{" "}
          </strong>
        </p>
            )}
        </div>
    );
}