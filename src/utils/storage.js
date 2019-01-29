let storage = window.localStorage
let session = window.sessionStorage
let version = '1.0.0';
export function getStorage (key) {
    return storage.getItem(key)
}

export function setStorage (key, value) {
    if (value === '' || value === []) {
        return storage.removeItem(key)
    } else {
        return storage.setItem(key, value)
    }
}

export function removeStorage (key) {
    return storage.removeItem(key)
}

export function getSession (key) {
    return session.getItem(key)
}

export function setSession (key, value) {
    if (value === '' || value === []) {
        return session.removeItem(key)
    } else {
        return session.setItem(key, value)
    }
}

export function removeSessione (key) {
    return session.removeItem(key)
}


