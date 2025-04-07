# Aplikacja z Faktami o Kotach

## Opis zadania

Wykorzystaj API, które zwraca randomowy fakt o kotach:
https://meowfacts.herokuapp.com/
Do napisania bardzo prostej aplikacji, w której będzie ekran logowania (dowolny sposób obsługi logowania, może być zupełny mock), oraz dostępny tylko dla zalogowanego użytkownika ekran na którym wyświetlane są karty z losowymi faktami o kotach, które przy scrollowaniu w dół będą się dociągać na bieżąco.
Endpoint nie zwraca niestety konkretnych id wpisów, więc trzeba będzie brzydko porównywać stringi, ale upewnij się, aby wpisy się nie powtarzały.

## Założenia

- Nx monorepo
- Mock authentication
- Mock na bearer token oraz może na refresh
- Możliwe wykorzystanie libki typu angular material/ionic - cokolwiek by nie wymyślać koła na nowo
- State managment with ngrx - prawdopodobnie 2 główne store: auth oraz api, możliwy component store
- Używanie nowego angulara - czyt signals, standalone components, functio
nal providers
- Aplikacja tylko csr, nie obchodzi nas seo ani ssr
- Unit testy tylko na domenowych funkcjach, integracyjne pomijane
- Routing na guardach wraz z lazyloading - canActivate i loadChildren
- Użycie odpowiedniej struktury danych - po prostu arrayka XD 

## Notatki developera

- sprawdzenie jak angular sobie radzi bez zone.js. Zoneless [artykuł](https://angular.dev/guide/experimental/zoneless)
- ng19 standalone default
- skłaniam się w kwesti providowania mocków do "root", nie chce mi się Tworzyc osobnych providerów dla różnych flag
- meta reducer jako localstorage mock

-https://meowfacts.herokuapp.com/ 
- https://github.com/wh-iterabb-it/meowfacts/blob/main/docs/api.yaml
openapi generator jest możliwością
- przy req o 123 fakty zwraca 91 linii
