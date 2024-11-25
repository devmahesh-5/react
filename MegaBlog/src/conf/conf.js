import App from "../App"

const conf={
    AppWriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    AppWriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    AppWriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    AppWriteCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    AppWriteStorageBucketId:String(import.meta.env.VITE_APPWRITE_STORAGE_BUCKET_ID),
}
export default conf