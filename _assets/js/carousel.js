!function(e){"use strict";e.fn.carousel=function(t){var i=e.extend({prev:".prev",next:".next",event:"click",item:".carousel-item",wrapper:".carousel-wrapper",itemsToScroll:1,scrollSpead:200,autoScrollTime:3e3},t),o=this,n=o.find(i.wrapper),c=o.find(i.prev),r=o.find(i.next),l=o.find(i.item+":eq(0)").width(),s=o.find(i.item).length,a=1,v={setActive:function(e){a=e,e--,o.find(".active").removeClass("active"),o.find(i.item+":eq("+e+")").addClass("active")},checkNavDisplay:function(){a>1&&a+i.itemsToScroll<=s&&(r.show(),c.show()),1===a&&(r.show(),c.hide()),a+i.itemsToScroll>s&&(r.hide(),c.show())},go:function(e){return e>s||1>e?!1:(this.setActive(e),n.animate({left:-1*l*(e-1)},i.scrollSpead),void v.checkNavDisplay())}};return v.setActive(a),v.checkNavDisplay(),c.on(i.event,function(){var e=a-i.itemsToScroll;v.go(e)}),r.on(i.event,function(){var e=a+i.itemsToScroll;v.go(e)}),setInterval(function(){var e=a+i.itemsToScroll;e>s&&(e=1),v.go(e)},i.autoScrollTime),this}}(jQuery);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmpzIl0sIm5hbWVzIjpbIiQiLCJmbiIsImNhcm91c2VsIiwib3B0aW9ucyIsInNldHRpbmdzIiwiZXh0ZW5kIiwicHJldiIsIm5leHQiLCJldmVudCIsIml0ZW0iLCJ3cmFwcGVyIiwiaXRlbXNUb1Njcm9sbCIsInNjcm9sbFNwZWFkIiwiYXV0b1Njcm9sbFRpbWUiLCIkY2Fyb3VzZWwiLCJ0aGlzIiwiJHdyYXBwZXIiLCJmaW5kIiwiJHByZXYiLCIkbmV4dCIsIml0ZW1XaWR0aCIsIndpZHRoIiwiaXRlbVF1YW50IiwibGVuZ3RoIiwiYWN0aXZlUGFnZU51bWJlciIsIkFQSSIsInNldEFjdGl2ZSIsInBhZ2VOdW1iZXIiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiY2hlY2tOYXZEaXNwbGF5Iiwic2hvdyIsImhpZGUiLCJnbyIsImFuaW1hdGUiLCJsZWZ0Iiwib24iLCJzY3JvbGxUbyIsInNldEludGVydmFsIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiQ0FBQSxTQUFXQSxHQUVQLFlBRUFBLEdBQUVDLEdBQUdDLFNBQVcsU0FBVUMsR0FFdEIsR0FBSUMsR0FBV0osRUFBRUssUUFDVEMsS0FBTSxRQUNOQyxLQUFNLFFBQ05DLE1BQU8sUUFDUEMsS0FBTSxpQkFDTkMsUUFBUyxvQkFDVEMsY0FBZSxFQUNmQyxZQUFhLElBQ2JDLGVBQWdCLEtBQ2pCVixHQUVIVyxFQUFZQyxLQUNaQyxFQUFXRixFQUFVRyxLQUFLYixFQUFTTSxTQUNuQ1EsRUFBUUosRUFBVUcsS0FBS2IsRUFBU0UsTUFDaENhLEVBQVFMLEVBQVVHLEtBQUtiLEVBQVNHLE1BRWhDYSxFQUFZTixFQUFVRyxLQUFLYixFQUFTSyxLQUFPLFVBQVVZLFFBQ3JEQyxFQUFZUixFQUFVRyxLQUFLYixFQUFTSyxNQUFNYyxPQUMxQ0MsRUFBbUIsRUFFbkJDLEdBQ0lDLFVBQVcsU0FBVUMsR0FDakJILEVBQW1CRyxFQUNuQkEsSUFDQWIsRUFBVUcsS0FBSyxXQUFXVyxZQUFZLFVBQ3RDZCxFQUFVRyxLQUFLYixFQUFTSyxLQUFPLE9BQVNrQixFQUFhLEtBQzNDRSxTQUFTLFdBRXZCQyxnQkFBaUIsV0FDVE4sRUFBbUIsR0FBS0EsRUFBbUJwQixFQUFTTyxlQUFpQlcsSUFDckVILEVBQU1ZLE9BQ05iLEVBQU1hLFFBRWUsSUFBckJQLElBQ0FMLEVBQU1ZLE9BQ05iLEVBQU1jLFFBRU5SLEVBQW1CcEIsRUFBU08sY0FBZ0JXLElBQzVDSCxFQUFNYSxPQUNOZCxFQUFNYSxTQUdkRSxHQUFJLFNBQVVOLEdBQ1YsTUFBSUEsR0FBYUwsR0FBMEIsRUFBYkssR0FBdUIsR0FFckRaLEtBQUtXLFVBQVVDLEdBQ2ZYLEVBQVNrQixTQUFTQyxLQUFRLEdBQUtmLEdBQWFPLEVBQVksSUFBS3ZCLEVBQVNRLGlCQUN0RWEsR0FBSUssb0JBMEJoQixPQXRCQUwsR0FBSUMsVUFBVUYsR0FDZEMsRUFBSUssa0JBRUpaLEVBQU1rQixHQUFHaEMsRUFBU0ksTUFBTyxXQUNyQixHQUFJNkIsR0FBV2IsRUFBbUJwQixFQUFTTyxhQUMzQ2MsR0FBSVEsR0FBR0ksS0FHWGxCLEVBQU1pQixHQUFHaEMsRUFBU0ksTUFBTyxXQUNyQixHQUFJNkIsR0FBV2IsRUFBbUJwQixFQUFTTyxhQUMzQ2MsR0FBSVEsR0FBR0ksS0FHWEMsWUFBWSxXQUNSLEdBQUlELEdBQVdiLEVBQW1CcEIsRUFBU08sYUFFdkMwQixHQUFXZixJQUNYZSxFQUFXLEdBRWZaLEVBQUlRLEdBQUdJLElBQ1JqQyxFQUFTUyxnQkFFTEUsT0FJWndCIiwiZmlsZSI6ImNhcm91c2VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICAkLmZuLmNhcm91c2VsID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICAgICB2YXIgc2V0dGluZ3MgPSAkLmV4dGVuZCh7XG4gICAgICAgICAgICAgICAgcHJldjogJy5wcmV2JyxcbiAgICAgICAgICAgICAgICBuZXh0OiAnLm5leHQnLFxuICAgICAgICAgICAgICAgIGV2ZW50OiAnY2xpY2snLFxuICAgICAgICAgICAgICAgIGl0ZW06ICcuY2Fyb3VzZWwtaXRlbScsXG4gICAgICAgICAgICAgICAgd3JhcHBlcjogJy5jYXJvdXNlbC13cmFwcGVyJyxcbiAgICAgICAgICAgICAgICBpdGVtc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIHNjcm9sbFNwZWFkOiAyMDAsXG4gICAgICAgICAgICAgICAgYXV0b1Njcm9sbFRpbWU6IDMwMDBcbiAgICAgICAgICAgIH0sIG9wdGlvbnMpXG4gICAgICAgIFxuICAgICAgICB2YXIgJGNhcm91c2VsID0gdGhpcyxcbiAgICAgICAgICAgICR3cmFwcGVyID0gJGNhcm91c2VsLmZpbmQoc2V0dGluZ3Mud3JhcHBlciksXG4gICAgICAgICAgICAkcHJldiA9ICRjYXJvdXNlbC5maW5kKHNldHRpbmdzLnByZXYpLFxuICAgICAgICAgICAgJG5leHQgPSAkY2Fyb3VzZWwuZmluZChzZXR0aW5ncy5uZXh0KVxuXG4gICAgICAgIHZhciBpdGVtV2lkdGggPSAkY2Fyb3VzZWwuZmluZChzZXR0aW5ncy5pdGVtICsgJzplcSgwKScpLndpZHRoKCksXG4gICAgICAgICAgICBpdGVtUXVhbnQgPSAkY2Fyb3VzZWwuZmluZChzZXR0aW5ncy5pdGVtKS5sZW5ndGgsXG4gICAgICAgICAgICBhY3RpdmVQYWdlTnVtYmVyID0gMVxuXG4gICAgICAgIHZhciBBUEkgPSB7XG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlOiBmdW5jdGlvbiAocGFnZU51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlTnVtYmVyID0gcGFnZU51bWJlclxuICAgICAgICAgICAgICAgICAgICBwYWdlTnVtYmVyLS1cbiAgICAgICAgICAgICAgICAgICAgJGNhcm91c2VsLmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgJGNhcm91c2VsLmZpbmQoc2V0dGluZ3MuaXRlbSArICc6ZXEoJyArIHBhZ2VOdW1iZXIgKyAnKScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNoZWNrTmF2RGlzcGxheTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aXZlUGFnZU51bWJlciA+IDEgJiYgYWN0aXZlUGFnZU51bWJlciArIHNldHRpbmdzLml0ZW1zVG9TY3JvbGwgPD0gaXRlbVF1YW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbmV4dC5zaG93KClcbiAgICAgICAgICAgICAgICAgICAgICAgICRwcmV2LnNob3coKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVQYWdlTnVtYmVyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbmV4dC5zaG93KClcbiAgICAgICAgICAgICAgICAgICAgICAgICRwcmV2LmhpZGUoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVQYWdlTnVtYmVyICsgc2V0dGluZ3MuaXRlbXNUb1Njcm9sbCA+IGl0ZW1RdWFudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJG5leHQuaGlkZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAkcHJldi5zaG93KClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ286IGZ1bmN0aW9uIChwYWdlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYWdlTnVtYmVyID4gaXRlbVF1YW50IHx8IHBhZ2VOdW1iZXIgPCAxKSByZXR1cm4gZmFsc2VcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZShwYWdlTnVtYmVyKVxuICAgICAgICAgICAgICAgICAgICAkd3JhcHBlci5hbmltYXRlKHsnbGVmdCc6IC0xICogaXRlbVdpZHRoICogKHBhZ2VOdW1iZXIgLTEpfSwgc2V0dGluZ3Muc2Nyb2xsU3BlYWQpXG4gICAgICAgICAgICAgICAgICAgIEFQSS5jaGVja05hdkRpc3BsYXkoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICBBUEkuc2V0QWN0aXZlKGFjdGl2ZVBhZ2VOdW1iZXIpXG4gICAgICAgIEFQSS5jaGVja05hdkRpc3BsYXkoKVxuXG4gICAgICAgICRwcmV2Lm9uKHNldHRpbmdzLmV2ZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsVG8gPSBhY3RpdmVQYWdlTnVtYmVyIC0gc2V0dGluZ3MuaXRlbXNUb1Njcm9sbFxuICAgICAgICAgICAgQVBJLmdvKHNjcm9sbFRvKVxuICAgICAgICB9KVxuXG4gICAgICAgICRuZXh0Lm9uKHNldHRpbmdzLmV2ZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsVG8gPSBhY3RpdmVQYWdlTnVtYmVyICsgc2V0dGluZ3MuaXRlbXNUb1Njcm9sbFxuICAgICAgICAgICAgQVBJLmdvKHNjcm9sbFRvKVxuICAgICAgICB9KVxuXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzY3JvbGxUbyA9IGFjdGl2ZVBhZ2VOdW1iZXIgKyBzZXR0aW5ncy5pdGVtc1RvU2Nyb2xsXG5cbiAgICAgICAgICAgIGlmIChzY3JvbGxUbyA+IGl0ZW1RdWFudClcbiAgICAgICAgICAgICAgICBzY3JvbGxUbyA9IDFcblxuICAgICAgICAgICAgQVBJLmdvKHNjcm9sbFRvKVxuICAgICAgICB9LCBzZXR0aW5ncy5hdXRvU2Nyb2xsVGltZSlcblxuICAgICAgICByZXR1cm4gdGhpc1xuXG4gICAgfVxuXG59KShqUXVlcnkpIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9