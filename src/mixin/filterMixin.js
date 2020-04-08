export default {
    filters: {
        capitalize: function (value) {
            if (!value) return "";
            return value
                .toString()
                .split(" ")
                .map(v => v.charAt(0).toUpperCase() + v.slice(1))
                .join(" ");
        }
    }
}