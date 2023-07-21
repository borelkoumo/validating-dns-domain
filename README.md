# validating-dns-domain

# C'est quoi le DNS

Presque tout sur Internet commence par une requête DNS. DNS est l'annuaire d’Internet. Lorsque vous cliquez sur un lien, que vous ouvrez une application, que vous envoyez un email à vos proches ou collègues, la première chose que votre application fait est de consulter le DNS, afin de trouver l'adresse du destinataire?

## Nom de domaine VS adresse IP

Pour accéder à un site web, nous entrons une adresse dans notre navigateur. Cette adresse, encore appelée **nom de domaine**, se présente sous la forme `youtube.com`, `gmail.com`, `yahoo.fr`, etc. Les ordinateurs par contre utilisent des adresses IP pour s'échanger des informations. **Une adresse IP est  un identifiant numérique unique attribué un appareil sur connecté à un réseau**. Ces identifiants sont numériques afin de faciliter leur traitement par les machines. Un ordinateur, un serveur, un objet connecté, un routeur, un smartphone dispose d'une adresse IP unique à partir du moment où il est connecté à internet. Etant uniques, les adresses IP permettent ainsi de différencier chaque appareil et de le localiser sur le réseau. 

Le fait que les adresses IP soient au format numérique présente un inconvénient, c'est qu'elles ne sont pas facilement mémorisables. C'est la raison pour laquelle à la place on utilise les noms de domaine, qui sont plus conviviaux et reconnaissables pour l'utilisateur. Il est beaucoup plus simple de se rappeler d'un nom de domaine comme "google.com" que de devoir se souvenir de l'adresse IP numérique associée (par exemple, 216.58.217.46 pour Google). C'est précisément en vue de palier à cet inconvénient que l'on utilise le système de DNS

## Pourquoi le DNS?

**Le DNS (Domain Name System) est un système qui permet de traduire les noms de domaine en adresses IP**. Lorsque vous saisissez un nom de domaine (par exemple, www.google.com) dans votre navigateur, le DNS se charge de trouver l'adresse IP correspondante pour établir la connexion avec le serveur web de google. Cette opération s'appelle la résolution de nom de domaine.

Le DNS fonctionne comme un annuaire d'Internet, en associant les noms de domaine facilement mémorisables aux adresses IP numériques spécifiques des serveurs. Il permet ainsi aux utilisateurs d'accéder aux sites web, aux services en ligne (email, ftp, ) et à d'autres ressources Internet sans avoir à se souvenir des adresses IP numériques complexes.

Il y a d'autres usages associés à un DNS:
- déclarer les serveurs de messagerie associés à un nom de domaine
- lutter contre le spam grâce aux enregistrements SPF
- etc

# Comment fonctionne le système DNS?
  
2 éléments essentiels composent le service DNS:
## Un protocole DNS
C'est un langage qui est utilisé par les serveurs DNS et les clients pour communiquer entre eux. 
Les requêtes DNS sont effectuées via le protocole DNS, l'échange des données se faisant grâce au protocole UDP sur le port 53

## Les serveurs DNS contenant les fichiers de zone DNS

Pour que le DNS puisse fonctionner, on a besoin de serveurs. Lorsque vous effectuez une requête DNS, votre ordinateur ou votre appareil envoie une demande à un serveur DNS. Ce serveur DNS interroge ensuite d'autres serveurs DNS pour résoudre le nom de domaine en une adresse IP. Une fois l'adresse IP obtenue, votre appareil peut établir une connexion avec le serveur hébergeant le site web demandé.

Sur ces serveurs, on retrouve essentiellement des fichiers de zone DNS. Ce sont des fichiers qui contiennent des **enregistrements DNS**. Pour chaque nom de domaine (par exemple google.com), on a un ensemble d'enregistrements qui fournissent des informations spécifiques sur ledit nom de domaine.

Les types d'enregistrements couramment utilisés sont: 
- Enregistrement A (Address) : Associe un nom de domaine à une adresse IP IPv4. Par exemple, il permet de faire correspondre "example.com" à "192.168.1.1".
- Enregistrement AAAA (IPv6 Address) : Associe un nom de domaine à une adresse IP IPv6. Il est utilisé pour les communications IPv6.
- Enregistrement CNAME (Canonical Name) : Crée un alias pour un nom de domaine existant (un autre hostname). Par exemple, "www.example.com" peut être un alias de "example.com". Autrement dit, c'est la même adresse IP qui sera utilisée par example.com et www.example.com
- Enregistrement MX (Mail Exchange) : Spécifie les serveurs de messagerie (e-mail) qui sont responsables de la réception des e-mails pour un domaine.
- Enregistrement NS (Name Server) : Indique les serveurs de noms (DNS) autoritaires pour un domaine, c'est-à-dire les serveurs qui connaissent les informations DNS spécifiques à ce domaine.
- Enregistrement TXT (Text) : Permet de stocker des informations textuelles arbitraires associées à un nom de domaine. Il est souvent utilisé pour la validation de domaine, la configuration SPF (Sender Policy Framework), etc.

En résumé, **Le système DNS utilise des serveurs DNS pour gérer les enregistrements DNS associés à chaque nom de domaine.**

# Les entrées MX (cf wikipedia)

Une entrée DNS MX indique les serveurs SMTP à contacter pour envoyer un courriel à un utilisateur d'un domaine donné. Par exemple :

```
wikimedia.org. IN MX 10 mchenry.wikimedia.org.
wikimedia.org. IN MX 50 lists.wikimedia.org.
````

On voit que les courriels envoyés à une adresse en @wikimedia.org sont envoyés au serveur mchenry.wikimedia.org. ou lists.wikimedia.org. Le nombre précédant le serveur représente la priorité. Le serveur avec la priorité numérique la plus petite est employé en priorité. Ici, c'est donc mchenry.wikimedia.org. qui doit être utilisé en premier, avec une valeur de 10.