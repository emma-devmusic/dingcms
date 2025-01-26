import { BlogTypes, Entity } from "../types/store"
import EncryptData from "./EncryptData"

interface WorkTree {
    [key: string]: {
        entitySelected: string;
        blogType: BlogTypes;
    }
}

export class LocalData {

    declare userId: string;
    declare workTree: WorkTree;

    constructor(userId:string) {
        this.userId = userId
        this.getEntitySelected = this.getEntitySelected.bind(this)
        this.workTree[userId] = {
            entitySelected: '',
            blogType: 'blogs'
        }
    }


    encrypter = new EncryptData()
    
    getEntitySelected(): Entity {
        const entityCrypted = localStorage.getItem('entity-selected')
        return this.encrypter.decrypt(entityCrypted).data as Entity
    }
    
    setEntityOnLS(entity: Entity) {
        localStorage.setItem(
            'entity-selected',
            this.encrypter.encrypt(entity)
        )

    }
}