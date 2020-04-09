import moment from 'moment'

export default {
    filters: {
        capitalize: function (value) {
            if (!value) return "";
            return value
                .toString()
                .split(" ")
                .map(v => v.charAt(0).toUpperCase() + v.slice(1))
                .join(" ");
        },
        fromNow: function (date) {
            return moment(date).fromNow();
        },
        localeDate: function (date) {
            return moment(date).format('lll');
        },
    }
}