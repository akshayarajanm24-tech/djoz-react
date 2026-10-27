
import { useEffect } from "react";

const tracks = [
  { id: 1, title: "David Guetta Miami Ultra", file: "/assets/music-files/1.mp3" },
  { id: 2, title: "Martin Garrix Summer Days", file: "/assets/music-files/2.mp3" },
  { id: 3, title: "Alan Walker Faded", file: "/assets/music-files/3.mp3" },
  { id: 4, title: "Calvin Harris Feel So Close", file: "/assets/music-files/4.mp3" },
  { id: 5, title: "Armin Van Buuren Music", file: "/assets/music-files/5.mp3" },
  { id: 6, title: "Latest DJ Mix", file: "/assets/music-files/6.mp3" },
];

function Track() {
  useEffect(() => {
    let intervalId;
    let cancelled = false;
    let initializedPlayers = [];

    const initializePlayers = () => {
      if (cancelled) return;

      const $ = window.jQuery;

      if (!$ || !$.fn || !$.fn.jPlayer) {
        return;
      }

      clearInterval(intervalId);

      $(".jplayer").each(function () {
        const player = $(this);

        // Prevent initializing the same player more than once.
        if (player.data("track-player-initialized")) return;

        const audioUrl = player.attr("data-url");
        const ancestor = player.attr("data-ancestor");

        if (!audioUrl || !ancestor) return;

        player.data("track-player-initialized", true);
        initializedPlayers.push(this);

        player.jPlayer({
          ready: function () {
            $(this).jPlayer("setMedia", {
              mp3: audioUrl,
            });
          },
          supplied: "mp3",
          preload: "metadata",
          cssSelectorAncestor: ancestor,
          swfPath: "/assets/js",
          wmode: "window",
          useStateClassSkin: true,
          autoBlur: false,
          smoothPlayBar: true,
          keyEnabled: true,
          remainingDuration: false,
          toggleDuration: false,
        });
      });

      // Enable the original template's custom scroll if available.
      if ($.fn.niceScroll) {
        $(".track__content").each(function () {
          if (!$(this).getNiceScroll().length) {
            $(this).niceScroll({
              cursorcolor: "#5c00ce",
              cursorwidth: "6px",
              background: "#e1e1e1",
              cursorborder: "none",
              cursorborderradius: "0",
            });
          }
        });
      }
    };

    initializePlayers();

    // Wait for jQuery and jPlayer if they have not loaded yet.
    intervalId = window.setInterval(initializePlayers, 300);

    return () => {
      cancelled = true;
      clearInterval(intervalId);

      const $ = window.jQuery;

      if ($ && $.fn && $.fn.jPlayer) {
        initializedPlayers.forEach((element) => {
          try {
            $(element).jPlayer("destroy");
            $(element).removeData("track-player-initialized");
          } catch (error) {
            // Ignore cleanup errors if a player was not fully initialized.
          }
        });
      }

      if ($ && $.fn && $.fn.getNiceScroll) {
        $(".track__content").getNiceScroll().remove();
      }
    };
  }, []);

  return (
    <section className="track spad">
      <div className="container">
        {/* Section heading */}
        <div className="row">
          <div className="col-lg-7">
            <div className="section-title">
              <h2>Latest tracks</h2>
              <h1>Music podcast</h1>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="track__all">
              <a href="#tracks" className="primary-btn border-btn">
                View all tracks
              </a>
            </div>
          </div>
        </div>

        {/* Music players and right-side image */}
        <div className="row" id="tracks">
          <div className="col-lg-7 p-0">
            <div className="track__content nice-scroll">
              {tracks.map((track) => (
                <div className="single_player_container" key={track.id}>
                  <h4>{track.title}</h4>

                  <div
                    className="jp-jplayer jplayer"
                    data-ancestor={`.jp_container_${track.id}`}
                    data-url={track.file}
                  />

                  <div
                    className={`jp-audio jp_container_${track.id}`}
                    role="application"
                    aria-label={`${track.title} media player`}
                  >
                    <div className="jp-gui jp-interface">
                      <div className="player_controls_box">
                        <button
                          type="button"
                          className="jp-play player_button"
                          tabIndex="0"
                          aria-label={`Play ${track.title}`}
                        />

                        <button
                          type="button"
                          className="jp-pause player_button"
                          tabIndex="0"
                          aria-label={`Pause ${track.title}`}
                        />
                      </div>

                      <div className="player_bars">
                        <div className="jp-progress">
                          <div className="jp-seek-bar">
                            <div>
                              <div className="jp-play-bar">
                                <div
                                  className="jp-current-time"
                                  role="timer"
                                  aria-label="Current time"
                                >
                                  0:00
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="jp-duration ml-auto"
                          role="timer"
                          aria-label="Duration"
                        >
                          00:00
                        </div>
                      </div>

                      <div className="jp-volume-controls">
                        <button
                          type="button"
                          className="jp-mute"
                          tabIndex="0"
                          aria-label="Mute"
                        >
                          <i className="fa fa-volume-down" />
                        </button>

                        <button
                          type="button"
                          className="jp-unmute"
                          tabIndex="0"
                          aria-label="Unmute"
                        >
                          <i className="fa fa-volume-up" />
                        </button>

                        <div className="jp-volume-bar">
                          <div
                            className="jp-volume-bar-value"
                            style={{ width: "0%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5 p-0">
            <div className="track__pic">
              <img
                src="/assets/img/track-right.jpg"
                alt="Music DJ"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Track;
