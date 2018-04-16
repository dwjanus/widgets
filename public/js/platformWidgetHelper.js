var platformWidgetHelper = (function() {

  var validEventTypes = new Set('*', 'ci_added', 'ci_removed')
  var localStorage

  return {
    show: function() {
      document.getElementById("widget").style.visibility = "visible"
    },

    hide: function() {
      document.getElementById("widget").style.visibility = "hidden"
    },

    getContextObject: function(callback) {
      callback({ 
        context_type: 'Incident', 
        context_id: 23529800,
        name: 'Harvest Project',
        number: '28',
        description: 'Testing Harvest integration', 
        assignee: {
          user_id: 2821593,
          group_id: 3031154,
          name: 'Devin'
        },
        requester: {
          user_id: 2821593,
          name: 'Devin'
        }
      })
    },

    callSamanageAPI: function(callback, HTTPMethod, url, payload) {
      fetch('/callExternalApi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ method: HTTPMethod, url: url, payload: payload })
      }).then((res) => res.json())
        .then((data) => {
          if (data.error) {
            throw new Error(data.error)
          } else {
            callback(data)
          }
        })
      .catch((e) => {
        console.log('\n! >>> Error caught at .catch() in callSamanageAPI(): \n ' + e)
      })
    },

    registerToEvents: (eventType, eventCallback) => {
    
    },

    getStorage: (callback) => {
      callback(localStorage);
    },

    setStorage: (callback, storage) => {
      localStorage = storage
      callback(localStorage);
    }
  };
})();