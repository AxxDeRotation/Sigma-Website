<script>
    import "$lib/simulator/web/epsilon/epsilon.js"
    import nw_bg from "$lib/simulator/web/epsilon/background.jpg"

    function Calculator(emModule) {
        var emModule = (typeof emModule === 'undefined') ? {} : emModule;
        var calculatorElement = emModule.element || document.querySelector('.calculator');
        var mainCanvas = calculatorElement.querySelector("canvas");
        if (typeof emModule.mirrorCanvas === 'undefined') {
        emModule.mirrorCanvas = document.querySelector('.calculator-mirror canvas');
        }
        var mirrorCanvasContext = emModule.mirrorCanvas ? emModule.mirrorCanvas.getContext('2d') : null;
        var defaultModule = {
        canvas: mainCanvas,
        arguments: [
            '--language',
            document.documentElement.lang || window.navigator.language.split('-')[0]
        ],
        onEpsilonIdle: function() {
            calculatorElement.classList.remove('loading');
        },
        downloadScreenshot: function() {
            this._IonDisplayForceRefresh();
            var link = document.createElement('a');
            link.download = 'screenshot.png';
            link.href = mainCanvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
            link.click();
        }
        };
        if (mirrorCanvasContext) {
        defaultModule.onDisplayRefresh = function() {
            mirrorCanvasContext.drawImage(mainCanvas, 0, 0);
        }
        }
        for (var attrname in defaultModule) {
        if (!emModule.hasOwnProperty(attrname)) {
            emModule[attrname] = defaultModule[attrname];
        }
        }
        Epsilon(emModule);
        function eventHandler(keyHandler) {
        return function(ev) {
            var key = this.getAttribute('data-key');
            keyHandler(key);
            ev.preventDefault();
        };
        }
        var downHandler = eventHandler(emModule._IonSimulatorKeyboardKeyDown);
        var upHandler = eventHandler(emModule._IonSimulatorKeyboardKeyUp);
        calculatorElement.querySelectorAll('span').forEach(function(span){
        ['touchstart', 'mousedown'].forEach(function(type){
            span.addEventListener(type, downHandler);
        });
        ['touchend', 'mouseup'].forEach(function(type){
            span.addEventListener(type, upHandler);
        });
        });
    }
    if (typeof exports === 'object' && typeof module === 'object') {
        module.exports = Calculator;
    }
    var Module = {};
    Calculator(Module);
  </script>

<div class="row">
    <div class="col-calculator">
        <div class="calculator-container">
        <img src={nw_bg} alt="NumWorks Calculator">
        <div class="calculator loading">
            <div class="loader"><span></span></div>
            <canvas tabindex="1"></canvas>
            <span data-key="0"></span>
            <span data-key="1"></span>
            <span data-key="2"></span>
            <span data-key="3"></span>
            <span data-key="4"></span>
            <span data-key="5"></span>
            <span data-key="6"></span>
            <span data-key="7"></span>
            <span data-key="12"></span>
            <span data-key="13"></span>
            <span data-key="14"></span>
            <span data-key="15"></span>
            <span data-key="16"></span>
            <span data-key="17"></span>
            <span data-key="18"></span>
            <span data-key="19"></span>
            <span data-key="20"></span>
            <span data-key="21"></span>
            <span data-key="22"></span>
            <span data-key="23"></span>
            <span data-key="24"></span>
            <span data-key="25"></span>
            <span data-key="26"></span>
            <span data-key="27"></span>
            <span data-key="28"></span>
            <span data-key="29"></span>
            <span data-key="30"></span>
            <span data-key="31"></span>
            <span data-key="32"></span>
            <span data-key="33"></span>
            <span data-key="34"></span>
            <span data-key="36"></span>
            <span data-key="37"></span>
            <span data-key="38"></span>
            <span data-key="39"></span>
            <span data-key="40"></span>
            <span data-key="42"></span>
            <span data-key="43"></span>
            <span data-key="44"></span>
            <span data-key="45"></span>
            <span data-key="46"></span>
            <span data-key="48"></span>
            <span data-key="49"></span>
            <span data-key="50"></span>
            <span data-key="51"></span>
            <span data-key="52"></span>
        </div>
        <!--<div class="actions">
            <a id="action-fullscreen" class="action">
            <svg viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g fill="#434343"><path d="M5.075,6.95 L6.918,5.088 L3.938,2.062 L5.955,0.018 L0.052,0.018 L0.052,6.004 L2.098,3.928 L5.075,6.95 Z" class="si-glyph-fill"></path><path d="M16.0034788,9.916 L13.832,12.013 L10.799,8.96 L8.918,10.841 L11.957,13.897 L9.961,15.9813842 L16.0034788,15.9813842 L16.0034788,9.916 Z"></path></g></g></svg>
            </a>
            <a id="action-screenshot" class="action">
            <svg viewBox="0 1.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>871</title><defs></defs><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(0.995000, 2.980000)" fill="#434343"><circle cx="7.958" cy="6.958" r="2.958" class="si-glyph-fill"></circle><path d="M14.666,2.042 L10.953,2.042 L9.937,0.031 L6,0.031 L5,2.042 L1.333,2.042 C0.597,2.042 0,2.639 0,3.375 L0,10.625 C0,11.361 0.597,11.959 1.333,11.959 L14.666,11.959 C15.402,11.959 16,11.361 16,10.625 L16,3.375 C16,2.639 15.402,2.042 14.666,2.042 L14.666,2.042 Z M6.953,0.969 L9.047,0.969 L9.047,2.031 L6.953,2.031 L6.953,0.969 L6.953,0.969 Z M8.002,11.033 C5.764,11.033 3.947,9.221 3.947,6.985 C3.947,4.749 5.763,2.937 8.002,2.937 C10.242,2.937 12.057,4.749 12.057,6.985 C12.057,9.221 10.242,11.033 8.002,11.033 L8.002,11.033 Z M14,4.031 L11.953,4.031 L11.953,2.969 L14,2.969 L14,4.031 L14,4.031 Z" class="si-glyph-fill"></path></g></g></svg>
            </a>
        </div>-->
        </div>
    </div>
    <div class="col-fullscreen calculator-mirror">
        <canvas width="320" height="240"></canvas>
    </div>
</div>