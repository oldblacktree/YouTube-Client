import './clips-box.css';

export default class ClipsBox {
  constructor() {
    this.element = document.createElement('ul');
    this.element.classList.add('clips-box');
    this.element.id = 'clips-box';
  }

  renderClips(clipsData) {
    clipsData.forEach((clipData) => {
      const clip = document.createElement('li');
      clip.classList.add('clip');
      clip.innerHTML = `
        <div class="clip-container">
          <div class="clip-head">
            <img class="clip-head__image" src="${clipData.image}" alt="${clipData.title}">
            <a class="clip-head__title" href="https://www.youtube.com/watch?v=${clipData.id}">${clipData.title}</a>
          </div>
          <div class="clip-info">
            <div class="clip-info__item">
             <div class="icon-user clip-info__icon">
              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                y="0px" viewBox="0 0 53.545 53.545" style="enable-background:new 0 0 53.545 53.545;" xml:space="preserve" width="20px">
                <g>
                  <circle style="fill:#010002;" cx="26.686" cy="4.507" r="4.507" />
                  <path style="fill:#010002;" d="M28.256,11.163c-1.123-0.228-2.344-0.218-3.447,0.042c-7.493,0.878-9.926,9.551-9.239,16.164
                    c0.298,2.859,4.805,2.889,4.504,0c-0.25-2.41-0.143-6.047,1.138-8.632c0,3.142,0,6.284,0,9.425c0,0.111,0.011,0.215,0.016,0.322
                    c-0.003,0.051-0.015,0.094-0.015,0.146c0,7.479-0.013,14.955-0.322,22.428c-0.137,3.322,5.014,3.309,5.15,0
                    c0.242-5.857,0.303-11.717,0.317-17.578c0.244,0.016,0.488,0.016,0.732,0.002c0.015,5.861,0.074,11.721,0.314,17.576
                    c0.137,3.309,5.288,3.322,5.15,0c-0.309-7.473-0.32-14.949-0.32-22.428c0-0.232-0.031-0.443-0.078-0.646
                    c-0.007-3.247-0.131-6.497-0.093-9.742c1.534,2.597,1.674,6.558,1.408,9.125c-0.302,2.887,4.206,2.858,4.504,0
                    C38.678,20.617,36.128,11.719,28.256,11.163z" />
                </g>
              </svg>
              </div>
              <p class="clip-info__text">${clipData.author}</p></div>
            <div class="clip-info__item">
              <div class="icon-calendar clip-info__icon">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                  y="0px" width="20px" viewBox="0 0 488.152 488.152"
                  style="enable-background:new 0 0 488.152 488.152;" xml:space="preserve">
                    <g>
                      <path d="M177.854,269.311c0-6.115-4.96-11.069-11.08-11.069h-38.665c-6.113,0-11.074,4.954-11.074,11.069v38.66
                      c0,6.123,4.961,11.079,11.074,11.079h38.665c6.12,0,11.08-4.956,11.08-11.079V269.311L177.854,269.311z" />
                      <path d="M274.483,269.311c0-6.115-4.961-11.069-11.069-11.069h-38.67c-6.113,0-11.074,4.954-11.074,11.069v38.66
                      c0,6.123,4.961,11.079,11.074,11.079h38.67c6.108,0,11.069-4.956,11.069-11.079V269.311z" />
                      <path d="M371.117,269.311c0-6.115-4.961-11.069-11.074-11.069h-38.665c-6.12,0-11.08,4.954-11.08,11.069v38.66
                      c0,6.123,4.96,11.079,11.08,11.079h38.665c6.113,0,11.074-4.956,11.074-11.079V269.311z" />
                      <path d="M177.854,365.95c0-6.125-4.96-11.075-11.08-11.075h-38.665c-6.113,0-11.074,4.95-11.074,11.075v38.653
                      c0,6.119,4.961,11.074,11.074,11.074h38.665c6.12,0,11.08-4.956,11.08-11.074V365.95L177.854,365.95z" />
                      <path d="M274.483,365.95c0-6.125-4.961-11.075-11.069-11.075h-38.67c-6.113,0-11.074,4.95-11.074,11.075v38.653
                      c0,6.119,4.961,11.074,11.074,11.074h38.67c6.108,0,11.069-4.956,11.069-11.074V365.95z" />
                      <path d="M371.117,365.95c0-6.125-4.961-11.075-11.069-11.075h-38.67c-6.12,0-11.08,4.95-11.08,11.075v38.653
                      c0,6.119,4.96,11.074,11.08,11.074h38.67c6.108,0,11.069-4.956,11.069-11.074V365.95L371.117,365.95z" />
                      <path d="M440.254,54.354v59.05c0,26.69-21.652,48.198-48.338,48.198h-30.493c-26.688,0-48.627-21.508-48.627-48.198V54.142
                      h-137.44v59.262c0,26.69-21.938,48.198-48.622,48.198H96.235c-26.685,0-48.336-21.508-48.336-48.198v-59.05
                      C24.576,55.057,5.411,74.356,5.411,98.077v346.061c0,24.167,19.588,44.015,43.755,44.015h389.82
                      c24.131,0,43.755-19.889,43.755-44.015V98.077C482.741,74.356,463.577,55.057,440.254,54.354z M426.091,422.588
                      c0,10.444-8.468,18.917-18.916,18.917H80.144c-10.448,0-18.916-8.473-18.916-18.917V243.835c0-10.448,8.467-18.921,18.916-18.921
                      h327.03c10.448,0,18.916,8.473,18.916,18.921L426.091,422.588L426.091,422.588z" />
                      <path d="M96.128,129.945h30.162c9.155,0,16.578-7.412,16.578-16.567V16.573C142.868,7.417,135.445,0,126.29,0H96.128
                      C86.972,0,79.55,7.417,79.55,16.573v96.805C79.55,122.533,86.972,129.945,96.128,129.945z" />
                      <path d="M361.035,129.945h30.162c9.149,0,16.572-7.412,16.572-16.567V16.573C407.77,7.417,400.347,0,391.197,0h-30.162
                      c-9.154,0-16.577,7.417-16.577,16.573v96.805C344.458,122.533,351.881,129.945,361.035,129.945z" />
                    </g>
                </svg>
              </div>
              <p class="clip-info__text">${clipData.date}</p></div>
            <div class="clip-info__item">
              <div class="icon-search clip-info__icon">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                  y="0px" width="20px"  viewBox="0 0 511.626 511.626"
                  style="enable-background:new 0 0 511.626 511.626;" xml:space="preserve">
                  <g>
                    <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687
                    c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818
                    c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68
                    c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699
                    C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554
                    c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704
                    c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971
                    c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999
                    c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04
                    c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222
                    c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362
                    s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362
                    c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04
                    z" />
                  </g>
                </svg>
              </div>
              <p class="clip-info__text">${clipData.view}</p>
            </div>
            <p class="clip-info__description">${clipData.description}</p>
          </div>
      </div>
        `;
      this.element.appendChild(clip);
    });


    const C = document.getElementById('clips-box');
    let numberClip = 1;
    let N = Math.ceil(C.children.length / numberClip);
    const NF = 30;
    const TFN = {
      'ease-out': function q(k, e = 1.675) {
        return 1 - ((1 - k) ** e);
      },
    };

    let i = 0;
    let x0 = null;
    let locked = false;
    let w;
    let ini;
    let fin;
    let rID = null;
    let anf;
    let n;

    function stopAni() {
      cancelAnimationFrame(rID);
      rID = null;
    }

    function ani(cf = 0) {
      C.style.setProperty(
        '--i',
        ini + (fin - ini) * TFN['ease-out'](cf / anf),
      );

      if (cf === anf) {
        stopAni();
        return;
      }

      rID = requestAnimationFrame(ani.bind(this, ++cf));
    }

    function unify(e) {
      return e.changedTouches ? e.changedTouches[0] : e;
    }

    function lock(e) {
      x0 = unify(e).clientX;
      locked = true;
    }

    function drag(e) {
      e.preventDefault();

      if (locked) {
        const dx = unify(e).clientX - x0;
        const f = +(dx / w).toFixed(2);

        C.style.setProperty('--i', i - f);
      }
    }

    function move(e) {
      if (locked) {
        const dx = unify(e).clientX - x0;
        const s = Math.sign(dx);
        let f = +((s * dx) / w).toFixed(2);

        ini = i - s * f;

        if ((i > 0 || s < 0) && (i < N - 1 || s > 0) && f > 0.2) {
          i -= s;
          f = 1 - f;
        }

        fin = i;
        anf = Math.round(f * NF);
        n = 2 + Math.round(f);
        ani();
        x0 = null;
        locked = false;
        const cur = document.getElementsByClassName(
          'pagination__item--cur',
        )[0];
        cur.innerHTML = `${i + 1}`;
      }
    }

    function moveM(e) {
      if (locked) {
        const dx = unify(e).clientX - x0;
        const s = Math.sign(dx);
        let f = +((s * dx) / w).toFixed(2);

        ini = i - s * f;

        if ((i > 0 || s < 0) && (i < N - 1 || s > 0) && f > 0.07) {
          i -= s;
          f = 1 - f;
        }

        fin = i;
        anf = Math.round(f * NF);
        n = 2 + Math.round(f);
        ani();
        x0 = null;
        locked = false;
        const cur = document.getElementsByClassName(
          'pagination__item--cur',
        )[0];
        cur.innerHTML = `${i + 1}`;
      }
    }

    function size() {
      w = window.innerWidth;
      numberClip = getComputedStyle(
        document.getElementById('clips-box'),
      ).getPropertyValue('--clipAmount');
      N = Math.ceil(C.children.length / numberClip);
      C.style.setProperty('--n', N);
    }

    size();

    C.style.setProperty('--n', N);

    C.addEventListener('mousedown', lock, false);
    C.addEventListener('touchstart', lock, false);

    C.addEventListener('mousemove', drag, false);
    C.addEventListener('touchmove', drag, false);

    C.addEventListener('mouseup', move, false);
    C.addEventListener('touchend', moveM, false);

    const cur = document.getElementsByClassName('pagination__item--cur')[0];

    const next = document.getElementsByClassName('pagination__item--next')[0];
    next.addEventListener('click', () => {
      if (i < N - 1) {
        i += 1;
        C.style.setProperty('--i', i);
        cur.innerHTML = `${i + 1}`;
      }
    });


    next.addEventListener('mousedown', () => {
      if (i + 1 < N) {
        const hover = document.createElement('p');
        hover.innerHTML = `${i + 2}`;
        hover.classList.add('pagination__hover');
        hover.style.id = 'pagination__hover';
        next.appendChild(hover);
      }
    });

    next.addEventListener('mouseup', () => {
      next.innerHTML = 'next';
    });

    const prev = document.getElementsByClassName('pagination__item--prev')[0];
    prev.addEventListener('click', () => {
      if (i > 0) {
        i -= 1;
        C.style.setProperty('--i', i);
        cur.innerHTML = `${i + 1}`;
      }
    });

    prev.addEventListener('mousedown', () => {
      const hover = document.createElement('p');
      if (i > 0) {
        hover.innerHTML = `${i}`;
        hover.classList.add('pagination__hover');
        hover.style.id = 'pagination__hover';
        prev.appendChild(hover);
      }
    });

    prev.addEventListener('mouseup', () => {
      prev.innerHTML = 'prev';
    });
  }
}
