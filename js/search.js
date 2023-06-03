window.addEventListener('DOMContentLoaded', function() {
  var searchQuery = new URLSearchParams(window.location.search).get('query');

  var pages = ['index.html', 'construction-installation-works.html', 'application.html', 'electric-installation-work.html', 'equipment_rental.html', 'gnb.html', 'our-company.html', 'services.html'];
  var searchResults = [];

  pages.forEach(function(page) {
    if (page !== 'search-results.html') {
      var request = new XMLHttpRequest();
      request.open('GET', page, false);
      request.send();

      if (request.status === 200) {
        var pageContent = request.responseText.toLowerCase();
        if (pageContent.includes(searchQuery.toLowerCase())) {
          searchResults.push(page);
        }
      }
    }
  });
  var searchResultsDiv = document.getElementById('search-results');
  if (searchResults.length > 0) {
    var resultsCount = searchResults.length;
    var resultsText = resultsCount + ' результата найдено для "' + searchQuery + '"';
    var resultsCountText = document.createTextNode(resultsText);
    searchResultsDiv.appendChild(resultsCountText);

    var resultsList = document.createElement('ul');
    searchResultsDiv.appendChild(resultsList);

    searchResults.forEach(function(result) {
      var listItem = document.createElement('li');
      var link = document.createElement('a');
      link.href = result;
      link.textContent = result;
      listItem.appendChild(link);
      resultsList.appendChild(listItem);
    });
  } else {
    var noResultsText = 'По результату поиска "' + searchQuery + '" ничего не найдено!';
    var noResultsMessage = document.createTextNode(noResultsText);
    searchResultsDiv.appendChild(noResultsMessage);
  }
});
