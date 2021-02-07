var styles = ["Джаз", "Блюз"];
styles.push("Рок-н-Ролл");
styles[styles.length - 2] = "Класика";
console.log(styles.shift());
styles.unshift("Реп", "Perri");
console.log(styles);