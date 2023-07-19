# validating-dns-domain

# Comment fonctionne le système DNS?
  
**Le système DNS utilise des serveurs DNS pour gérer les enregistrements DNS associés à chaque nom de domaine.**

Ainsi, pour chaque nom de domaine (par exemple google.com), on a un ensemble d'enregistrements qui fournissent des informations spécifiques sur ledit nom de domaine. Ces enregistrements sont stockés dans une base de données, laquelle base est elle même hébergé sur des serveurs pécifiques que l'on appelle serveurs DNS.

Les types d'enregistrements couramment utilisés sont: 
- Enregistrement A (Address) : Associe un nom de domaine à une adresse IP IPv4. Par exemple, il permet de faire correspondre "example.com" à "192.168.1.1".
- Enregistrement AAAA (IPv6 Address) : Associe un nom de domaine à une adresse IP IPv6. Il est utilisé pour les communications IPv6.
- Enregistrement CNAME (Canonical Name) : Crée un alias pour un nom de domaine existant (un autre hostname). Par exemple, "www.example.com" peut être un alias de "example.com".
- Enregistrement MX (Mail Exchange) : Spécifie les serveurs de messagerie (e-mail) qui sont responsables de la réception des e-mails pour un domaine.
- Enregistrement NS (Name Server) : Indique les serveurs de noms (DNS) autoritaires pour un domaine, c'est-à-dire les serveurs qui connaissent les informations DNS spécifiques à ce domaine.
- Enregistrement TXT (Text) : Permet de stocker des informations textuelles arbitraires associées à un nom de domaine. Il est souvent utilisé pour la validation de domaine, la configuration SPF (Sender Policy Framework), etc.
