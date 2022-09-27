import eel

def node():
    '''nodes = ["WN-LP01-03", "WN-LP02-02", "WN-LP03-02", "WN-LP04-02", "WN-LP05-02", "WN-LP06-01", "WN-LP07-01", "WN-LP08-01",
             "WN-LP09-01", "WN-LP10-01", "WN-LP11-01",
             "WN-LP12-01", "WN-LP13-01", "WN-LP14-01", "WN-LP15-01", "WN-LP16-01", "WN-LP17-01", "WN-LP18-01", "WN-LP19-01",
             "WN-LP20-01", "WN-LP21-01", "WN-LP22-01",
             "WN-LP23-01", "WN-LP24-01", "WN-LP25-01", "WN-LP26-01", "WN-LP27-01", "WN-LP28-01", "WN-LP29-01", "WN-LP30-01"]

    Mac_address = ["fd12:3456::b6e3:f9ff:fea6:53a", "fd12:3456::b6e3:f9ff:fea6:2e7", "fd12:3456::5232:5fff:fe42:8a37",
               "fd12:3456::b6e3:f9ff:fea6:314", "fd12:3456::b6e3:f9ff:fea6:53e",
               "fd12:3456::5232:5fff:fe42:5ea0", "fd12:3456::5232:5fff:fe42:5df9", "fd12:3456::5232:5fff:fe42:5e26",
               "fd12:3456::5232:5fff:fe42:6155", " fd12:3456::5232:5fff:fe42:61b0",
               "fd12:3456::5232:5fff:fe42:6039", "fd12:3456::5232:5fff:fe42:5dd8", "fd12:3456::5232:5fff:fe42:619d",
               "fd12:3456::5232:5fff:fe42:614d", "fd12:3456::5232:5fff:fe42:6177",
               "fd12:3456::5232:5fff:fe42:6160", "fd12:3456::5232:5fff:fe42:6154", "fd12:3456::5232:5fff:fe42:5def",
               "fd12:3456::5232:5fff:fe42:61d0", "fd12:3456::5232:5fff:fe42:61c9",
               " fd12:3456::5232:5fff:fe42:61d2", "fd12:3456::5232:5fff:fe42:5e8e", "fd12:3456::5232:5fff:fe42:5e01",
               "fd12:3456::5232:5fff:fe42:6168", "fd12:3456::5232:5fff:fe42:60ac",
               "fd12:3456::5232:5fff:fe42:61cf", "fd12:3456::5232:5fff:fe42:5e2a", "fd12:3456::5232:5fff:fe42:61ef",
               "fd12:3456::5232:5fff:fe42:8b7b", "fd12:3456::5232:5fff:fe42:61c7"]

    d = dict(zip(nodes, Mac_address))
    print(d)



    g = []
    for i in nodes:
        url = "https://onem2m.iiit.ac.in:443/~/in-cse/in-name/AE-WN" + "/" + i + "/" + "Data/la"

        payload = ""
        headers = {
            'X-M2M-Origin': 'guest:guest',
            'Accept': 'application/json'
        }

        response = requests.request("GET", url, headers=headers, data=payload)
        a = response.text
        student = json.loads(a)

        if "m2m:cin" in student:
            e = student["m2m:cin"]
            if "con" in e:
                h = e["con"]
                h = list(h.split(","))
                g.append(h[-2])
        c = dict(zip(nodes, g))
    # f=[]
    f = dict(zip(d.keys(), c.keys()))'''
    #dict = {'a': 'akshat', 'b': 'bhuvan', 'c': 'chandan'}
    nodes = ["WN-LP01-03", "WN-LP02-02", "WN-LP03-02", "WN-LP04-02", "WN-LP05-02", "WN-LP06-01", "WN-LP07-01",
             "WN-LP08-01",
             "WN-LP09-01", "WN-LP10-01", "WN-LP11-01",
             "WN-LP12-01", "WN-LP13-01", "WN-LP14-01", "WN-LP15-01", "WN-LP16-01", "WN-LP17-01", "WN-LP18-01",
             "WN-LP19-01",
             "WN-LP20-01", "WN-LP21-01", "WN-LP22-01",
             "WN-LP23-01", "WN-LP24-01", "WN-LP25-01", "WN-LP26-01", "WN-LP27-01", "WN-LP28-01", "WN-LP29-01",
             "WN-LP30-01"]

    Mac_address = ["fd12:3456::b6e3:f9ff:fea6:53a", "fd12:3456::b6e3:f9ff:fea6:2e7", "fd12:3456::5232:5fff:fe42:8a37",
                   "fd12:3456::b6e3:f9ff:fea6:314", "fd12:3456::b6e3:f9ff:fea6:53e",
                   "fd12:3456::5232:5fff:fe42:5ea0", "fd12:3456::5232:5fff:fe42:5df9", "fd12:3456::5232:5fff:fe42:5e26",
                   "fd12:3456::5232:5fff:fe42:6155", " fd12:3456::5232:5fff:fe42:61b0",
                   "fd12:3456::5232:5fff:fe42:6039", "fd12:3456::5232:5fff:fe42:5dd8", "fd12:3456::5232:5fff:fe42:619d",
                   "fd12:3456::5232:5fff:fe42:614d", "fd12:3456::5232:5fff:fe42:6177",
                   "fd12:3456::5232:5fff:fe42:6160", "fd12:3456::5232:5fff:fe42:6154", "fd12:3456::5232:5fff:fe42:5def",
                   "fd12:3456::5232:5fff:fe42:61d0", "fd12:3456::5232:5fff:fe42:61c9",
                   " fd12:3456::5232:5fff:fe42:61d2", "fd12:3456::5232:5fff:fe42:5e8e",
                   "fd12:3456::5232:5fff:fe42:5e01",
                   "fd12:3456::5232:5fff:fe42:6168", "fd12:3456::5232:5fff:fe42:60ac",
                   "fd12:3456::5232:5fff:fe42:61cf", "fd12:3456::5232:5fff:fe42:5e2a", "fd12:3456::5232:5fff:fe42:61ef",
                   "fd12:3456::5232:5fff:fe42:8b7b", "fd12:3456::5232:5fff:fe42:61c7"]

    d = dict(zip(nodes, Mac_address))
    return d


@eel.expose

def dic():

    # printing iniial_dictionary
    # split dictionary into keys and values
    ini_dict=node()
    keys, values = zip(*ini_dict.items())
    a=[{'from':i,'to':j} for i,j in zip(keys,values)]
    print(a)
    print(keys)
    print(values)
    eel.init()



eel.init("web")
eel.start("tracing.html")
