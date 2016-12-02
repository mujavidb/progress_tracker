#Important Endpoints for the Microsoft VSTS API

Base URL: `https://vs1team8.VisualStudio.com`

## Get a list of of projects

Request:
```
GET /DefaultCollection/_apis/projects?api-version=2.0 HTTP/1.1
Host: vs1team8.VisualStudio.com
```
Response:
```
{
  "count": 1,
  "value": [
    {
      "id": "32d0977f-dd8f-49af-986c-c18e0afed40b",
      "name": "VS1Team8",
      "description": "Visual Studio 1, Team 8",
      "url": "https://vs1team8.visualstudio.com/DefaultCollection/_apis/projects/32d0977f-dd8f-49af-986c-c18e0afed40b",
      "state": "wellFormed",
      "revision": 14
    }
  ]
}
```


## Get a list of work items

#### 1. Get a list of all the work item IDS

Request:
```
POST /DefaultCollection/VS1Team8/_apis/wit/wiql?api-version=2.0 HTTP/1.1
Host: vs1team8.visualstudio.com
Content-Type: application/json

{
  "query": "Select [System.Id], [System.Title], [System.State] From WorkItems"
}
```
Response:
```
{
  "queryType": "flat",
  "queryResultType": "workItem",
  "asOf": "2016-11-25T18:59:03.047Z",
  "columns": [
    {
      "referenceName": "System.Id",
      "name": "ID",
      "url": "https://vs1team8.visualstudio.com/DefaultCollection/_apis/wit/fields/System.Id"
    },
    {
      "referenceName": "System.Title",
      "name": "Title",
      "url": "https://vs1team8.visualstudio.com/DefaultCollection/_apis/wit/fields/System.Title"
    },
    {
      "referenceName": "System.State",
      "name": "State",
      "url": "https://vs1team8.visualstudio.com/DefaultCollection/_apis/wit/fields/System.State"
    }
  ],
  "workItems": [
    ...
    {
      "id": 47,
      "url": "https://vs1team8.visualstudio.com/DefaultCollection/_apis/wit/workItems/47"
    },
    {
      "id": 48,
      "url": "https://vs1team8.visualstudio.com/DefaultCollection/_apis/wit/workItems/48"
    },
    ...
  ]
}
```

#### 2. Request all ids specifically
Request:
```
GET /DefaultCollection/_apis/wit/WorkItems?api-version=2.0&amp;ids=1,2,3,4,5,6,7,8,9,10,52&amp;fields=System.Id,System.Title,System.CreatedBy,System.TeamProject HTTP/1.1
Host: vs1team8.visualstudio.com
Content-Type: application/json
```
No spaces between parameter's sub-values
Response:
```
{
  "count": 11,
  "value": [
    ...
    {
      "id": 10,
      "rev": 2,
      "fields": {
        "System.Id": 10,
        "System.TeamProject": "VS1Team8",
        "System.CreatedBy": "Hall, Al <zcaball@ucl.ac.uk>",
        "System.Title": "Set team capacity"
      },
      "url": "https://vs1team8.visualstudio.com/DefaultCollection/_apis/wit/workItems/10"
    },
    {
      "id": 51,
      "rev": 3,
      "fields": {
        "System.Id": 51,
        "System.TeamProject": "VS1Team8",
        "System.CreatedBy": "Hall, Al <zcaball@ucl.ac.uk>",
        "System.Title": "Configure board with happiness",
        "System.Tags": "length:4; start:01/01/2016"
      },
      "url": "https://vs1team8.visualstudio.com/DefaultCollection/_apis/wit/workItems/51"
    }
  ]
}
```

## Get an individual work-item
Request:
```
GET /DefaultCollection/_apis/wit/workItems/51?api-version=2.0 HTTP/1.1
Host: vs1team8.visualstudio.com
Content-Type: application/json
```
Response:
```
{
  "id": 51,
  "rev": 2,
  "fields": {
    "System.AreaPath": "VS1Team8",
    "System.TeamProject": "VS1Team8",
    "System.IterationPath": "VS1Team8\\Iteration 1",
    "System.WorkItemType": "Feature",
    "System.State": "New",
    "System.Reason": "New",
    "System.CreatedDate": "2016-11-16T22:49:31.53Z",
    "System.CreatedBy": "Hall, Al <zcaball@ucl.ac.uk>",
    "System.ChangedDate": "2016-11-25T19:33:21.04Z",
    "System.ChangedBy": "Mujavid Bukhari <ucnvmbu@ucl.ac.uk>",
    "System.Title": "Configure board with happiness",
    "System.BoardColumn": "New",
    "System.BoardColumnDone": false,
    "Microsoft.VSTS.Common.StateChangeDate": "2016-11-16T22:49:31.53Z",
    "Microsoft.VSTS.Common.Priority": 2,
    "Microsoft.VSTS.Common.ValueArea": "Business",
    "WEF_FA2C4CEADDC741448AB24429DD20E306_Kanban.Column": "New",
    "WEF_FA2C4CEADDC741448AB24429DD20E306_Kanban.Column.Done": false
  },
  "_links": {
    "self": {
      "href": "https://vs1team8.visualstudio.com/DefaultCollection/_apis/wit/workItems/51"
    },
    ...
  },
  "url": "https://vs1team8.visualstudio.com/DefaultCollection/_apis/wit/workItems/51"
}
```

## Update an individual work-item
Request:
```
PATCH /DefaultCollection/_apis/wit/workItems/51?api-version=2.0 HTTP/1.1
Host: vs1team8.visualstudio.com
Content-Type: application/json-patch+json

[
    {
        "op": "replace",
        "path": "/fields/System.Title",
        "value": "Configure board with happiness"
    }
]
```
Response:
```
{
  "id": 51,
  "rev": 2,
  "fields": {
    "System.AreaPath": "VS1Team8",
    "System.TeamProject": "VS1Team8",
    "System.IterationPath": "VS1Team8\\Iteration 1",
    "System.WorkItemType": "Feature",
    "System.State": "New",
    "System.Reason": "New",
    "System.CreatedDate": "2016-11-16T22:49:31.53Z",
    "System.CreatedBy": "Hall, Al <zcaball@ucl.ac.uk>",
    "System.ChangedDate": "2016-11-25T19:33:21.04Z",
    "System.ChangedBy": "Mujavid Bukhari <ucnvmbu@ucl.ac.uk>",
    "System.Title": "Configure board with happiness",
    "System.BoardColumn": "New",
    "System.BoardColumnDone": false,
    "Microsoft.VSTS.Common.StateChangeDate": "2016-11-16T22:49:31.53Z",
    "Microsoft.VSTS.Common.Priority": 2,
    "Microsoft.VSTS.Common.ValueArea": "Business",
    "WEF_FA2C4CEADDC741448AB24429DD20E306_Kanban.Column": "New",
    "WEF_FA2C4CEADDC741448AB24429DD20E306_Kanban.Column.Done": false
  },
  "relations": [
    {
      "rel": "System.LinkTypes.Hierarchy-Reverse",
      "url": "https://vs1team8.visualstudio.com/DefaultCollection/_apis/wit/workItems/46",
      "attributes": {
        "isLocked": false
      }
    },
    {
      "rel": "System.LinkTypes.Hierarchy-Forward",
      "url": "https://vs1team8.visualstudio.com/DefaultCollection/_apis/wit/workItems/52",
      "attributes": {
        "isLocked": false
      }
    },
    {
      "rel": "System.LinkTypes.Hierarchy-Forward",
      "url": "https://vs1team8.visualstudio.com/DefaultCollection/_apis/wit/workItems/53",
      "attributes": {
        "isLocked": false
      }
    },
    {
      "rel": "System.LinkTypes.Hierarchy-Forward",
      "url": "https://vs1team8.visualstudio.com/DefaultCollection/_apis/wit/workItems/62",
      "attributes": {
        "isLocked": false
      }
    }
  ],
  "_links": {
    "self": {
      "href": "https://vs1team8.visualstudio.com/DefaultCollection/_apis/wit/workItems/51"
    },
    ...
  },
  "url": "https://vs1team8.visualstudio.com/DefaultCollection/_apis/wit/workItems/51"
}
```

## Update tags for a work item
Request:
```
PATCH /DefaultCollection/_apis/wit/workItems/51?api-version=2.0 HTTP/1.1
Host: vs1team8.visualstudio.com
Content-Type: application/json-patch+json

[
    {
        "op": "add",
        "path": "/fields/System.Tags",
        "value": "start:01/01/2016;length:4;"
    }
]
```
Response:
```
{
  "id": 51,
  "rev": 3,
  "fields": {
    ...
    "System.Tags": "length:4; start:01/01/2016"
  },
  "relations": [
    ...
    }
  ],
  "_links": {
    ...
  },
  "url": "https://vs1team8.visualstudio.com/DefaultCollection/_apis/wit/workItems/51"
}
```