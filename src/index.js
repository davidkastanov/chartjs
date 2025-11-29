import Chart from "chart.js/auto";
import { alert, defaultModules, success, error, info } from "@pnotify/core/dist/PNotify.js";
import * as PNotifyMobile from "@pnotify/mobile/dist/PNotifyMobile.js";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/mobile/dist/PNotifyMobile.css";
import "@pnotify/core/dist/PNotify.css";

defaultModules.set(PNotifyMobile, {});

const chartData = {
  labels: Array.from({ length: 30 }, (_, i) => (i + 1).toString()),
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};

const config = {
  type: "line",
  data: chartData,
};

const canvasRef = document.getElementById("sales-chart");
const salesChart = new Chart(canvasRef, config);

const boxEl = document.querySelector(".box");
const keys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
let currentKeyIndex = 0;

boxEl.textContent = keys[currentKeyIndex];

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    boxEl.textContent = "Bye";
    info({
      title: "Допобачення",
      text: "Ви закінчили гру.",
    });
    return;
  }

  if (keys[currentKeyIndex] === event.key) {
    currentKeyIndex = Math.floor(Math.random() * keys.length);
    boxEl.textContent = keys[currentKeyIndex];
    success({
      title: "Ураа!",
      text: "Ви натиснули правильну літеру.",
      delay: 500,
    });
  } else {
    error({
      title: "О ні",
      text: "Ви натиснули неправильну літеру.",
      delay: 500,
    });
  }
});