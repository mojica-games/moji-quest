import { initializeApp } from "firebase/app";
// ↓ 今後使うFirebaseの機能（データベースや認証）をここに追加していきます
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// --- ここが最重要 ---
// .envファイルに書いた「鍵」を、安全に読み込んでいます
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
};
// --------------------

// Firebaseアプリの初期化（この設定でFirebaseに接続します）
const app = initializeApp(firebaseConfig);

// 今後、ゲームの他のファイルから「db」や「auth」という名前で
// データベースや認証機能を呼び出せるように、準備しておきます。
export const db = getFirestore(app);
export const auth = getAuth(app);

// （念のためapp本体もエクスポートします）
export default app;