/**
 * masterChars.js
 *
 * ゲームの全文字ユニットのマスターデータです。（※漢字は含みません）
 * 設計書 2.1. (doc_chars) および アプローチA (1ユニット=1読み) に基づきます。
 * Firebase Firestore の `masters/doc_chars` ドキュメントとして
 * 一括登録するために使用します。
 *
 * 構造:
 * [ID]: {
 * display_char: "表示文字",
 * rarity: レアリティ (数値 1-5),
 * roma_id: "ワードボーナス判定用のローマ字ID",
 * dan_id: "相性（段）判定用ID",
 * gyo_id: "特色（行）判定用ID"
 * }
 */

export const MASTER_CHARS = {

  // --- 1. ひらがな (清音) ---
  // Rarity: 1
  "h_a": { "display_char": "あ", "rarity": 1, "roma_id": "a", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  "h_i": { "display_char": "い", "rarity": 1, "roma_id": "i", "dan_id": "i_dan", "gyo_id": "a_gyo" },
  "h_u": { "display_char": "う", "rarity": 1, "roma_id": "u", "dan_id": "u_dan", "gyo_id": "a_gyo" },
  "h_e": { "display_char": "え", "rarity": 1, "roma_id": "e", "dan_id": "e_dan", "gyo_id": "a_gyo" },
  "h_o": { "display_char": "お", "rarity": 1, "roma_id": "o", "dan_id": "o_dan", "gyo_id": "a_gyo" },

  "h_ka": { "display_char": "か", "rarity": 1, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  "h_ki": { "display_char": "き", "rarity": 1, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  "h_ku": { "display_char": "く", "rarity": 1, "roma_id": "ku", "dan_id": "u_dan", "gyo_id": "ka_gyo" },
  "h_ke": { "display_char": "け", "rarity": 1, "roma_id": "ke", "dan_id": "e_dan", "gyo_id": "ka_gyo" },
  "h_ko": { "display_char": "こ", "rarity": 1, "roma_id": "ko", "dan_id": "o_dan", "gyo_id": "ka_gyo" },

  "h_sa": { "display_char": "さ", "rarity": 1, "roma_id": "sa", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  "h_shi": { "display_char": "し", "rarity": 1, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" },
  "h_su": { "display_char": "す", "rarity": 1, "roma_id": "su", "dan_id": "u_dan", "gyo_id": "sa_gyo" },
  "h_se": { "display_char": "せ", "rarity": 1, "roma_id": "se", "dan_id": "e_dan", "gyo_id": "sa_gyo" },
  "h_so": { "display_char": "そ", "rarity": 1, "roma_id": "so", "dan_id": "o_dan", "gyo_id": "sa_gyo" },

  "h_ta": { "display_char": "た", "rarity": 1, "roma_id": "ta", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  "h_chi": { "display_char": "ち", "rarity": 1, "roma_id": "chi", "dan_id": "i_dan", "gyo_id": "ta_gyo" },
  "h_tsu": { "display_char": "つ", "rarity": 1, "roma_id": "tsu", "dan_id": "u_dan", "gyo_id": "ta_gyo" },
  "h_te": { "display_char": "て", "rarity": 1, "roma_id": "te", "dan_id": "e_dan", "gyo_id": "ta_gyo" },
  "h_to": { "display_char": "と", "rarity": 1, "roma_id": "to", "dan_id": "o_dan", "gyo_id": "ta_gyo" },

  "h_na": { "display_char": "な", "rarity": 1, "roma_id": "na", "dan_id": "a_dan", "gyo_id": "na_gyo" },
  "h_ni": { "display_char": "に", "rarity": 1, "roma_id": "ni", "dan_id": "i_dan", "gyo_id": "na_gyo" },
  "h_nu": { "display_char": "ぬ", "rarity": 1, "roma_id": "nu", "dan_id": "u_dan", "gyo_id": "na_gyo" },
  "h_ne": { "display_char": "ね", "rarity": 1, "roma_id": "ne", "dan_id": "e_dan", "gyo_id": "na_gyo" },
  "h_no": { "display_char": "の", "rarity": 1, "roma_id": "no", "dan_id": "o_dan", "gyo_id": "na_gyo" },

  "h_ha": { "display_char": "は", "rarity": 1, "roma_id": "ha", "dan_id": "a_dan", "gyo_id": "ha_gyo" },
  "h_hi": { "display_char": "ひ", "rarity": 1, "roma_id": "hi", "dan_id": "i_dan", "gyo_id": "ha_gyo" },
  "h_fu": { "display_char": "ふ", "rarity": 1, "roma_id": "fu", "dan_id": "u_dan", "gyo_id": "ha_gyo" },
  "h_he": { "display_char": "へ", "rarity": 1, "roma_id": "he", "dan_id": "e_dan", "gyo_id": "ha_gyo" },
  "h_ho": { "display_char": "ほ", "rarity": 1, "roma_id": "ho", "dan_id": "o_dan", "gyo_id": "ha_gyo" },

  "h_ma": { "display_char": "ま", "rarity": 1, "roma_id": "ma", "dan_id": "a_dan", "gyo_id": "ma_gyo" },
  "h_mi": { "display_char": "み", "rarity": 1, "roma_id": "mi", "dan_id": "i_dan", "gyo_id": "ma_gyo" },
  "h_mu": { "display_char": "む", "rarity": 1, "roma_id": "mu", "dan_id": "u_dan", "gyo_id": "ma_gyo" },
  "h_me": { "display_char": "め", "rarity": 1, "roma_id": "me", "dan_id": "e_dan", "gyo_id": "ma_gyo" },
  "h_mo": { "display_char": "も", "rarity": 1, "roma_id": "mo", "dan_id": "o_dan", "gyo_id": "ma_gyo" },

  "h_ya": { "display_char": "や", "rarity": 1, "roma_id": "ya", "dan_id": "a_dan", "gyo_id": "ya_gyo" },
  "h_yu": { "display_char": "ゆ", "rarity": 1, "roma_id": "yu", "dan_id": "u_dan", "gyo_id": "ya_gyo" },
  "h_yo": { "display_char": "よ", "rarity": 1, "roma_id": "yo", "dan_id": "o_dan", "gyo_id": "ya_gyo" },

  "h_ra": { "display_char": "ら", "rarity": 1, "roma_id": "ra", "dan_id": "a_dan", "gyo_id": "ra_gyo" },
  "h_ri": { "display_char": "り", "rarity": 1, "roma_id": "ri", "dan_id": "i_dan", "gyo_id": "ra_gyo" },
  "h_ru": { "display_char": "る", "rarity": 1, "roma_id": "ru", "dan_id": "u_dan", "gyo_id": "ra_gyo" },
  "h_re": { "display_char": "れ", "rarity": 1, "roma_id": "re", "dan_id": "e_dan", "gyo_id": "ra_gyo" },
  "h_ro": { "display_char": "ろ", "rarity": 1, "roma_id": "ro", "dan_id": "o_dan", "gyo_id": "ra_gyo" },

  "h_wa": { "display_char": "わ", "rarity": 1, "roma_id": "wa", "dan_id": "a_dan", "gyo_id": "wa_gyo" },
  "h_wo": { "display_char": "を", "rarity": 1, "roma_id": "wo", "dan_id": "o_dan", "gyo_id": "wa_gyo" },
  "h_n": { "display_char": "ん", "rarity": 1, "roma_id": "n", "dan_id": "n_dan", "gyo_id": "n_gyo" }, // W1ボス

  // --- 2. ひらがな (濁音・半濁音) ---
  // Rarity: 2
  "h_ga": { "display_char": "が", "rarity": 2, "roma_id": "ga", "dan_id": "a_dan", "gyo_id": "ga_gyo" },
  "h_gi": { "display_char": "ぎ", "rarity": 2, "roma_id": "gi", "dan_id": "i_dan", "gyo_id": "ga_gyo" },
  "h_gu": { "display_char": "ぐ", "rarity": 2, "roma_id": "gu", "dan_id": "u_dan", "gyo_id": "ga_gyo" },
  "h_ge": { "display_char": "げ", "rarity": 2, "roma_id": "ge", "dan_id": "e_dan", "gyo_id": "ga_gyo" },
  "h_go": { "display_char": "ご", "rarity": 2, "roma_id": "go", "dan_id": "o_dan", "gyo_id": "ga_gyo" },

  "h_za": { "display_char": "ざ", "rarity": 2, "roma_id": "za", "dan_id": "a_dan", "gyo_id": "za_gyo" },
  "h_ji": { "display_char": "じ", "rarity": 2, "roma_id": "ji", "dan_id": "i_dan", "gyo_id": "za_gyo" },
  "h_zu": { "display_char": "ず", "rarity": 2, "roma_id": "zu", "dan_id": "u_dan", "gyo_id": "za_gyo" },
  "h_ze": { "display_char": "ぜ", "rarity": 2, "roma_id": "ze", "dan_id": "e_dan", "gyo_id": "za_gyo" },
  "h_zo": { "display_char": "ぞ", "rarity": 2, "roma_id": "zo", "dan_id": "o_dan", "gyo_id": "za_gyo" },

  "h_da": { "display_char": "だ", "rarity": 2, "roma_id": "da", "dan_id": "a_dan", "gyo_id": "da_gyo" },
  "h_dji": { "display_char": "ぢ", "rarity": 2, "roma_id": "di", "dan_id": "i_dan", "gyo_id": "da_gyo" }, // roma_idは ji/di 区別のため
  "h_dzu": { "display_char": "づ", "rarity": 2, "roma_id": "du", "dan_id": "u_dan", "gyo_id": "da_gyo" }, // roma_idは zu/du 区別のため
  "h_de": { "display_char": "で", "rarity": 2, "roma_id": "de", "dan_id": "e_dan", "gyo_id": "da_gyo" },
  "h_do": { "display_char": "ど", "rarity": 2, "roma_id": "do", "dan_id": "o_dan", "gyo_id": "da_gyo" },

  "h_ba": { "display_char": "ば", "rarity": 2, "roma_id": "ba", "dan_id": "a_dan", "gyo_id": "ba_gyo" },
  "h_bi": { "display_char": "び", "rarity": 2, "roma_id": "bi", "dan_id": "i_dan", "gyo_id": "ba_gyo" },
  "h_bu": { "display_char": "ぶ", "rarity": 2, "roma_id": "bu", "dan_id": "u_dan", "gyo_id": "ba_gyo" },
  "h_be": { "display_char": "べ", "rarity": 2, "roma_id": "be", "dan_id": "e_dan", "gyo_id": "ba_gyo" },
  "h_bo": { "display_char": "ぼ", "rarity": 2, "roma_id": "bo", "dan_id": "o_dan", "gyo_id": "ba_gyo" },

  "h_pa": { "display_char": "ぱ", "rarity": 2, "roma_id": "pa", "dan_id": "a_dan", "gyo_id": "pa_gyo" },
  "h_pi": { "display_char": "ぴ", "rarity": 2, "roma_id": "pi", "dan_id": "i_dan", "gyo_id": "pa_gyo" },
  "h_pu": { "display_char": "ぷ", "rarity": 2, "roma_id": "pu", "dan_id": "u_dan", "gyo_id": "pa_gyo" },
  "h_pe": { "display_char": "ぺ", "rarity": 2, "roma_id": "pe", "dan_id": "e_dan", "gyo_id": "pa_gyo" },
  "h_po": { "display_char": "ぽ", "rarity": 2, "roma_id": "po", "dan_id": "o_dan", "gyo_id": "pa_gyo" },

  // --- 3. ひらがな (拗音) ---
  // Rarity: 2
  "h_kya": { "display_char": "きゃ", "rarity": 2, "roma_id": "kya", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  "h_kyu": { "display_char": "きゅ", "rarity": 2, "roma_id": "kyu", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  "h_kyo": { "display_char": "きょ", "rarity": 2, "roma_id": "kyo", "dan_id": "i_dan", "gyo_id": "ka_gyo" },

  "h_sha": { "display_char": "しゃ", "rarity": 2, "roma_id": "sha", "dan_id": "i_dan", "gyo_id": "sa_gyo" },
  "h_shu": { "display_char": "しゅ", "rarity": 2, "roma_id": "shu", "dan_id": "i_dan", "gyo_id": "sa_gyo" },
  "h_sho": { "display_char": "しょ", "rarity": 2, "roma_id": "sho", "dan_id": "i_dan", "gyo_id": "sa_gyo" },

  "h_cha": { "display_char": "ちゃ", "rarity": 2, "roma_id": "cha", "dan_id": "i_dan", "gyo_id": "ta_gyo" },
  "h_chu": { "display_char": "ちゅ", "rarity": 2, "roma_id": "chu", "dan_id": "i_dan", "gyo_id": "ta_gyo" },
  "h_cho": { "display_char": "ちょ", "rarity": 2, "roma_id": "cho", "dan_id": "i_dan", "gyo_id": "ta_gyo" },

  "h_nya": { "display_char": "にゃ", "rarity": 2, "roma_id": "nya", "dan_id": "i_dan", "gyo_id": "na_gyo" },
  "h_nyu": { "display_char": "にゅ", "rarity": 2, "roma_id": "nyu", "dan_id": "i_dan", "gyo_id": "na_gyo" },
  "h_nyo": { "display_char": "にょ", "rarity": 2, "roma_id": "nyo", "dan_id": "i_dan", "gyo_id": "na_gyo" },

  "h_hya": { "display_char": "ひゃ", "rarity": 2, "roma_id": "hya", "dan_id": "i_dan", "gyo_id": "ha_gyo" },
  "h_hyu": { "display_char": "ひゅ", "rarity": 2, "roma_id": "hyu", "dan_id": "i_dan", "gyo_id": "ha_gyo" },
  "h_hyo": { "display_char": "ひょ", "rarity": 2, "roma_id": "hyo", "dan_id": "i_dan", "gyo_id": "ha_gyo" },

  "h_mya": { "display_char": "みゃ", "rarity": 2, "roma_id": "mya", "dan_id": "i_dan", "gyo_id": "ma_gyo" },
  "h_myu": { "display_char": "みゅ", "rarity": 2, "roma_id": "myu", "dan_id": "i_dan", "gyo_id": "ma_gyo" },
  "h_myo": { "display_char": "みょ", "rarity": 2, "roma_id": "myo", "dan_id": "i_dan", "gyo_id": "ma_gyo" },

  "h_rya": { "display_char": "りゃ", "rarity": 2, "roma_id": "rya", "dan_id": "i_dan", "gyo_id": "ra_gyo" },
  "h_ryu": { "display_char": "りゅ", "rarity": 2, "roma_id": "ryu", "dan_id": "i_dan", "gyo_id": "ra_gyo" },
  "h_ryo": { "display_char": "りょ", "rarity": 2, "roma_id": "ryo", "dan_id": "i_dan", "gyo_id": "ra_gyo" },

  "h_gya": { "display_char": "ぎゃ", "rarity": 2, "roma_id": "gya", "dan_id": "i_dan", "gyo_id": "ga_gyo" },
  "h_gyu": { "display_char": "ぎゅ", "rarity": 2, "roma_id": "gyu", "dan_id": "i_dan", "gyo_id": "ga_gyo" },
  "h_gyo": { "display_char": "ぎょ", "rarity": 2, "roma_id": "gyo", "dan_id": "i_dan", "gyo_id": "ga_gyo" },

  "h_ja": { "display_char": "じゃ", "rarity": 2, "roma_id": "ja", "dan_id": "i_dan", "gyo_id": "za_gyo" },
  "h_ju": { "display_char": "じゅ", "rarity": 2, "roma_id": "ju", "dan_id": "i_dan", "gyo_id": "za_gyo" },
  "h_jo": { "display_char": "じょ", "rarity": 2, "roma_id": "jo", "dan_id": "i_dan", "gyo_id": "za_gyo" },

  "h_dja": { "display_char": "ぢゃ", "rarity": 2, "roma_id": "dja", "dan_id": "i_dan", "gyo_id": "da_gyo" },
  "h_dju": { "display_char": "ぢゅ", "rarity": 2, "roma_id": "dju", "dan_id": "i_dan", "gyo_id": "da_gyo" },
  "h_djo": { "display_char": "ぢょ", "rarity": 2, "roma_id": "djo", "dan_id": "i_dan", "gyo_id": "da_gyo" },

  "h_bya": { "display_char": "びゃ", "rarity": 2, "roma_id": "bya", "dan_id": "i_dan", "gyo_id": "ba_gyo" },
  "h_byu": { "display_char": "びゅ", "rarity": 2, "roma_id": "byu", "dan_id": "i_dan", "gyo_id": "ba_gyo" },
  "h_byo": { "display_char": "びょ", "rarity": 2, "roma_id": "byo", "dan_id": "i_dan", "gyo_id": "ba_gyo" },

  "h_pya": { "display_char": "ぴゃ", "rarity": 2, "roma_id": "pya", "dan_id": "i_dan", "gyo_id": "pa_gyo" },
  "h_pyu": { "display_char": "ぴゅ", "rarity": 2, "roma_id": "pyu", "dan_id": "i_dan", "gyo_id": "pa_gyo" },
  "h_pyo": { "display_char": "ぴょ", "rarity": 2, "roma_id": "pyo", "dan_id": "i_dan", "gyo_id": "pa_gyo" },

  // --- 4. ひらがな (促音・小文字) ---
  // Rarity: 1
  "h_xtu": { "display_char": "っ", "rarity": 1, "roma_id": "xtu", "dan_id": "n_dan", "gyo_id": "ta_gyo" },
  "h_xa": { "display_char": "ぁ", "rarity": 1, "roma_id": "xa", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  "h_xi": { "display_char": "ぃ", "rarity": 1, "roma_id": "xi", "dan_id": "i_dan", "gyo_id": "a_gyo" },
  "h_xu": { "display_char": "ぅ", "rarity": 1, "roma_id": "xu", "dan_id": "u_dan", "gyo_id": "a_gyo" },
  "h_xe": { "display_char": "ぇ", "rarity": 1, "roma_id": "xe", "dan_id": "e_dan", "gyo_id": "a_gyo" },
  "h_xo": { "display_char": "ぉ", "rarity": 1, "roma_id": "xo", "dan_id": "o_dan", "gyo_id": "a_gyo" },
  "h_xya": { "display_char": "ゃ", "rarity": 1, "roma_id": "xya", "dan_id": "a_dan", "gyo_id": "ya_gyo" },
  "h_xyu": { "display_char": "ゅ", "rarity": 1, "roma_id": "xyu", "dan_id": "u_dan", "gyo_id": "ya_gyo" },
  "h_xyo": { "display_char": "ょ", "rarity": 1, "roma_id": "xyo", "dan_id": "o_dan", "gyo_id": "ya_gyo" },
  "h_xwa": { "display_char": "ゎ", "rarity": 1, "roma_id": "xwa", "dan_id": "a_dan", "gyo_id": "wa_gyo" },

  // --- 5. カタカナ (清音) ---
  // Rarity: 1
  "k_a": { "display_char": "ア", "rarity": 1, "roma_id": "a", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  "k_i": { "display_char": "イ", "rarity": 1, "roma_id": "i", "dan_id": "i_dan", "gyo_id": "a_gyo" },
  "k_u": { "display_char": "ウ", "rarity": 1, "roma_id": "u", "dan_id": "u_dan", "gyo_id": "a_gyo" },
  "k_e": { "display_char": "エ", "rarity": 1, "roma_id": "e", "dan_id": "e_dan", "gyo_id": "a_gyo" },
  "k_o": { "display_char": "オ", "rarity": 1, "roma_id": "o", "dan_id": "o_dan", "gyo_id": "a_gyo" },

  "k_ka": { "display_char": "カ", "rarity": 1, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  "k_ki": { "display_char": "キ", "rarity": 1, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  "k_ku": { "display_char": "ク", "rarity": 1, "roma_id": "ku", "dan_id": "u_dan", "gyo_id": "ka_gyo" },
  "k_ke": { "display_char": "ケ", "rarity": 1, "roma_id": "ke", "dan_id": "e_dan", "gyo_id": "ka_gyo" },
  "k_ko": { "display_char": "コ", "rarity": 1, "roma_id": "ko", "dan_id": "o_dan", "gyo_id": "ka_gyo" },

  "k_sa": { "display_char": "サ", "rarity": 1, "roma_id": "sa", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  "k_shi": { "display_char": "シ", "rarity": 1, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" },
  "k_su": { "display_char": "ス", "rarity": 1, "roma_id": "su", "dan_id": "u_dan", "gyo_id": "sa_gyo" },
  "k_se": { "display_char": "セ", "rarity": 1, "roma_id": "se", "dan_id": "e_dan", "gyo_id": "sa_gyo" },
  "k_so": { "display_char": "ソ", "rarity": 1, "roma_id": "so", "dan_id": "o_dan", "gyo_id": "sa_gyo" },

  "k_ta": { "display_char": "タ", "rarity": 1, "roma_id": "ta", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  "k_chi": { "display_char": "チ", "rarity": 1, "roma_id": "chi", "dan_id": "i_dan", "gyo_id": "ta_gyo" },
  "k_tsu": { "display_char": "ツ", "rarity": 1, "roma_id": "tsu", "dan_id": "u_dan", "gyo_id": "ta_gyo" },
  "k_te": { "display_char": "テ", "rarity": 1, "roma_id": "te", "dan_id": "e_dan", "gyo_id": "ta_gyo" },
  "k_to": { "display_char": "ト", "rarity": 1, "roma_id": "to", "dan_id": "o_dan", "gyo_id": "ta_gyo" },

  "k_na": { "display_char": "ナ", "rarity": 1, "roma_id": "na", "dan_id": "a_dan", "gyo_id": "na_gyo" },
  "k_ni": { "display_char": "ニ", "rarity": 1, "roma_id": "ni", "dan_id": "i_dan", "gyo_id": "na_gyo" },
  "k_nu": { "display_char": "ヌ", "rarity": 1, "roma_id": "nu", "dan_id": "u_dan", "gyo_id": "na_gyo" },
  "k_ne": { "display_char": "ネ", "rarity": 1, "roma_id": "ne", "dan_id": "e_dan", "gyo_id": "na_gyo" },
  "k_no": { "display_char": "ノ", "rarity": 1, "roma_id": "no", "dan_id": "o_dan", "gyo_id": "na_gyo" },

  "k_ha": { "display_char": "ハ", "rarity": 1, "roma_id": "ha", "dan_id": "a_dan", "gyo_id": "ha_gyo" },
  "k_hi": { "display_char": "ヒ", "rarity": 1, "roma_id": "hi", "dan_id": "i_dan", "gyo_id": "ha_gyo" },
  "k_fu": { "display_char": "フ", "rarity": 1, "roma_id": "fu", "dan_id": "u_dan", "gyo_id": "ha_gyo" },
  "k_he": { "display_char": "ヘ", "rarity": 1, "roma_id": "he", "dan_id": "e_dan", "gyo_id": "ha_gyo" },
  "k_ho": { "display_char": "ホ", "rarity": 1, "roma_id": "ho", "dan_id": "o_dan", "gyo_id": "ha_gyo" },

  "k_ma": { "display_char": "マ", "rarity": 1, "roma_id": "ma", "dan_id": "a_dan", "gyo_id": "ma_gyo" },
  "k_mi": { "display_char": "ミ", "rarity": 1, "roma_id": "mi", "dan_id": "i_dan", "gyo_id": "ma_gyo" },
  "k_mu": { "display_char": "ム", "rarity": 1, "roma_id": "mu", "dan_id": "u_dan", "gyo_id": "ma_gyo" },
  "k_me": { "display_char": "メ", "rarity": 1, "roma_id": "me", "dan_id": "e_dan", "gyo_id": "ma_gyo" },
  "k_mo": { "display_char": "モ", "rarity": 1, "roma_id": "mo", "dan_id": "o_dan", "gyo_id": "ma_gyo" },

  "k_ya": { "display_char": "ヤ", "rarity": 1, "roma_id": "ya", "dan_id": "a_dan", "gyo_id": "ya_gyo" },
  "k_yu": { "display_char": "ユ", "rarity": 1, "roma_id": "yu", "dan_id": "u_dan", "gyo_id": "ya_gyo" },
  "k_yo": { "display_char": "ヨ", "rarity": 1, "roma_id": "yo", "dan_id": "o_dan", "gyo_id": "ya_gyo" },

  "k_ra": { "display_char": "ラ", "rarity": 1, "roma_id": "ra", "dan_id": "a_dan", "gyo_id": "ra_gyo" },
  "k_ri": { "display_char": "リ", "rarity": 1, "roma_id": "ri", "dan_id": "i_dan", "gyo_id": "ra_gyo" },
  "k_ru": { "display_char": "ル", "rarity": 1, "roma_id": "ru", "dan_id": "u_dan", "gyo_id": "ra_gyo" },
  "k_re": { "display_char": "レ", "rarity": 1, "roma_id": "re", "dan_id": "e_dan", "gyo_id": "ra_gyo" },
  "k_ro": { "display_char": "ロ", "rarity": 1, "roma_id": "ro", "dan_id": "o_dan", "gyo_id": "ra_gyo" },

  "k_wa": { "display_char": "ワ", "rarity": 1, "roma_id": "wa", "dan_id": "a_dan", "gyo_id": "wa_gyo" },
  "k_wo": { "display_char": "ヲ", "rarity": 1, "roma_id": "wo", "dan_id": "o_dan", "gyo_id": "wa_gyo" },
  "k_n": { "display_char": "ン", "rarity": 1, "roma_id": "n", "dan_id": "n_dan", "gyo_id": "n_gyo" },

  // --- 6. カタカナ (濁音・半濁音) ---
  // Rarity: 2
  "k_ga": { "display_char": "ガ", "rarity": 2, "roma_id": "ga", "dan_id": "a_dan", "gyo_id": "ga_gyo" },
  "k_gi": { "display_char": "ギ", "rarity": 2, "roma_id": "gi", "dan_id": "i_dan", "gyo_id": "ga_gyo" },
  "k_gu": { "display_char": "グ", "rarity": 2, "roma_id": "gu", "dan_id": "u_dan", "gyo_id": "ga_gyo" },
  "k_ge": { "display_char": "ゲ", "rarity": 2, "roma_id": "ge", "dan_id": "e_dan", "gyo_id": "ga_gyo" },
  "k_go": { "display_char": "ゴ", "rarity": 2, "roma_id": "go", "dan_id": "o_dan", "gyo_id": "ga_gyo" },

  "k_za": { "display_char": "ザ", "rarity": 2, "roma_id": "za", "dan_id": "a_dan", "gyo_id": "za_gyo" },
  "k_ji": { "display_char": "ジ", "rarity": 2, "roma_id": "ji", "dan_id": "i_dan", "gyo_id": "za_gyo" },
  "k_zu": { "display_char": "ズ", "rarity": 2, "roma_id": "zu", "dan_id": "u_dan", "gyo_id": "za_gyo" },
  "k_ze": { "display_char": "ゼ", "rarity": 2, "roma_id": "ze", "dan_id": "e_dan", "gyo_id": "za_gyo" },
  "k_zo": { "display_char": "ゾ", "rarity": 2, "roma_id": "zo", "dan_id": "o_dan", "gyo_id": "za_gyo" },

  "k_da": { "display_char": "ダ", "rarity": 2, "roma_id": "da", "dan_id": "a_dan", "gyo_id": "da_gyo" },
  "k_dji": { "display_char": "ヂ", "rarity": 2, "roma_id": "di", "dan_id": "i_dan", "gyo_id": "da_gyo" },
  "k_dzu": { "display_char": "ヅ", "rarity": 2, "roma_id": "du", "dan_id": "u_dan", "gyo_id": "da_gyo" },
  "k_de": { "display_char": "デ", "rarity": 2, "roma_id": "de", "dan_id": "e_dan", "gyo_id": "da_gyo" },
  "k_do": { "display_char": "ド", "rarity": 2, "roma_id": "do", "dan_id": "o_dan", "gyo_id": "da_gyo" },

  "k_ba": { "display_char": "バ", "rarity": 2, "roma_id": "ba", "dan_id": "a_dan", "gyo_id": "ba_gyo" },
  "k_bi": { "display_char": "ビ", "rarity": 2, "roma_id": "bi", "dan_id": "i_dan", "gyo_id": "ba_gyo" },
  "k_bu": { "display_char": "ブ", "rarity": 2, "roma_id": "bu", "dan_id": "u_dan", "gyo_id": "ba_gyo" },
  "k_be": { "display_char": "ベ", "rarity": 2, "roma_id": "be", "dan_id": "e_dan", "gyo_id": "ba_gyo" },
  "k_bo": { "display_char": "ボ", "rarity": 2, "roma_id": "bo", "dan_id": "o_dan", "gyo_id": "ba_gyo" },

  "k_pa": { "display_char": "パ", "rarity": 2, "roma_id": "pa", "dan_id": "a_dan", "gyo_id": "pa_gyo" },
  "k_pi": { "display_char": "ピ", "rarity": 2, "roma_id": "pi", "dan_id": "i_dan", "gyo_id": "pa_gyo" },
  "k_pu": { "display_char": "プ", "rarity": 2, "roma_id": "pu", "dan_id": "u_dan", "gyo_id": "pa_gyo" },
  "k_pe": { "display_char": "ペ", "rarity": 2, "roma_id": "pe", "dan_id": "e_dan", "gyo_id": "pa_gyo" },
  "k_po": { "display_char": "ポ", "rarity": 2, "roma_id": "po", "dan_id": "o_dan", "gyo_id": "pa_gyo" },

  // --- 7. カタカナ (拗音) ---
  // Rarity: 2
  "k_kya": { "display_char": "キャ", "rarity": 2, "roma_id": "kya", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  "k_kyu": { "display_char": "キュ", "rarity": 2, "roma_id": "kyu", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  "k_kyo": { "display_char": "キョ", "rarity": 2, "roma_id": "kyo", "dan_id": "i_dan", "gyo_id": "ka_gyo" },

  "k_sha": { "display_char": "シャ", "rarity": 2, "roma_id": "sha", "dan_id": "i_dan", "gyo_id": "sa_gyo" },
  "k_shu": { "display_char": "シュ", "rarity": 2, "roma_id": "shu", "dan_id": "i_dan", "gyo_id": "sa_gyo" },
  "k_sho": { "display_char": "ショ", "rarity": 2, "roma_id": "sho", "dan_id": "i_dan", "gyo_id": "sa_gyo" },

  "k_cha": { "display_char": "チャ", "rarity": 2, "roma_id": "cha", "dan_id": "i_dan", "gyo_id": "ta_gyo" },
  "k_chu": { "display_char": "チュ", "rarity": 2, "roma_id": "chu", "dan_id": "i_dan", "gyo_id": "ta_gyo" },
  "k_cho": { "display_char": "チョ", "rarity": 2, "roma_id": "cho", "dan_id": "i_dan", "gyo_id": "ta_gyo" },

  "k_nya": { "display_char": "ニャ", "rarity": 2, "roma_id": "nya", "dan_id": "i_dan", "gyo_id": "na_gyo" },
  "k_nyu": { "display_char": "ニュ", "rarity": 2, "roma_id": "nyu", "dan_id": "i_dan", "gyo_id": "na_gyo" },
  "k_nyo": { "display_char": "ニョ", "rarity": 2, "roma_id": "nyo", "dan_id": "i_dan", "gyo_id": "na_gyo" },

  "k_hya": { "display_char": "ヒャ", "rarity": 2, "roma_id": "hya", "dan_id": "i_dan", "gyo_id": "ha_gyo" },
  "k_hyu": { "display_char": "ヒュ", "rarity": 2, "roma_id": "hyu", "dan_id": "i_dan", "gyo_id": "ha_gyo" },
  "k_hyo": { "display_char": "ヒョ", "rarity": 2, "roma_id": "hyo", "dan_id": "i_dan", "gyo_id": "ha_gyo" },

  "k_mya": { "display_char": "ミャ", "rarity": 2, "roma_id": "mya", "dan_id": "i_dan", "gyo_id": "ma_gyo" },
  "k_myu": { "display_char": "ミュ", "rarity": 2, "roma_id": "myu", "dan_id": "i_dan", "gyo_id": "ma_gyo" },
  "k_myo": { "display_char": "ミョ", "rarity": 2, "roma_id": "myo", "dan_id": "i_dan", "gyo_id": "ma_gyo" },

  "k_rya": { "display_char": "リャ", "rarity": 2, "roma_id": "rya", "dan_id": "i_dan", "gyo_id": "ra_gyo" },
  "k_ryu": { "display_char": "リュ", "rarity": 2, "roma_id": "ryu", "dan_id": "i_dan", "gyo_id": "ra_gyo" },
  "k_ryo": { "display_char": "リョ", "rarity": 2, "roma_id": "ryo", "dan_id": "i_dan", "gyo_id": "ra_gyo" },

  "k_gya": { "display_char": "ギャ", "rarity": 2, "roma_id": "gya", "dan_id": "i_dan", "gyo_id": "ga_gyo" },
  "k_gyu": { "display_char": "ギュ", "rarity": 2, "roma_id": "gyu", "dan_id": "i_dan", "gyo_id": "ga_gyo" },
  "k_gyo": { "display_char": "ギョ", "rarity": 2, "roma_id": "gyo", "dan_id": "i_dan", "gyo_id": "ga_gyo" },

  "k_ja": { "display_char": "ジャ", "rarity": 2, "roma_id": "ja", "dan_id": "i_dan", "gyo_id": "za_gyo" },
  "k_ju": { "display_char": "ジュ", "rarity": 2, "roma_id": "ju", "dan_id": "i_dan", "gyo_id": "za_gyo" },
  "k_jo": { "display_char": "ジョ", "rarity": 2, "roma_id": "jo", "dan_id": "i_dan", "gyo_id": "za_gyo" },

  "k_dja": { "display_char": "ヂャ", "rarity": 2, "roma_id": "dja", "dan_id": "i_dan", "gyo_id": "da_gyo" },
  "k_dju": { "display_char": "ヂュ", "rarity": 2, "roma_id": "dju", "dan_id": "i_dan", "gyo_id": "da_gyo" },
  "k_djo": { "display_char": "ヂョ", "rarity": 2, "roma_id": "djo", "dan_id": "i_dan", "gyo_id": "da_gyo" },

  "k_bya": { "display_char": "ビャ", "rarity": 2, "roma_id": "bya", "dan_id": "i_dan", "gyo_id": "ba_gyo" },
  "k_byu": { "display_char": "ビュ", "rarity": 2, "roma_id": "byu", "dan_id": "i_dan", "gyo_id": "ba_gyo" },
  "k_byo": { "display_char": "ビョ", "rarity": 2, "roma_id": "byo", "dan_id": "i_dan", "gyo_id": "ba_gyo" },

  "k_pya": { "display_char": "ピャ", "rarity": 2, "roma_id": "pya", "dan_id": "i_dan", "gyo_id": "pa_gyo" },
  "k_pyu": { "display_char": "ピュ", "rarity": 2, "roma_id": "pyu", "dan_id": "i_dan", "gyo_id": "pa_gyo" },
  "k_pyo": { "display_char": "ピョ", "rarity": 2, "roma_id": "pyo", "dan_id": "i_dan", "gyo_id": "pa_gyo" },

  // --- 8. カタカナ (促音・小文字・特殊外来語) ---
  // Rarity: 1-2
  "k_xtu": { "display_char": "ッ", "rarity": 1, "roma_id": "xtu", "dan_id": "n_dan", "gyo_id": "ta_gyo" },
  "k_xa": { "display_char": "ァ", "rarity": 1, "roma_id": "xa", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  "k_xi": { "display_char": "ィ", "rarity": 1, "roma_id": "xi", "dan_id": "i_dan", "gyo_id": "a_gyo" },
  "k_xu": { "display_char": "ゥ", "rarity": 1, "roma_id": "xu", "dan_id": "u_dan", "gyo_id": "a_gyo" },
  "k_xe": { "display_char": "ェ", "rarity": 1, "roma_id": "xe", "dan_id": "e_dan", "gyo_id": "a_gyo" },
  "k_xo": { "display_char": "ォ", "rarity": 1, "roma_id": "xo", "dan_id": "o_dan", "gyo_id": "a_gyo" },
  "k_xya": { "display_char": "ャ", "rarity": 1, "roma_id": "xya", "dan_id": "a_dan", "gyo_id": "ya_gyo" },
  "k_xyu": { "display_char": "ュ", "rarity": 1, "roma_id": "xyu", "dan_id": "u_dan", "gyo_id": "ya_gyo" },
  "k_xyo": { "display_char": "ョ", "rarity": 1, "roma_id": "xyo", "dan_id": "o_dan", "gyo_id": "ya_gyo" },
  "k_xwa": { "display_char": "ヮ", "rarity": 1, "roma_id": "xwa", "dan_id": "a_dan", "gyo_id": "wa_gyo" },
  "k_xka": { "display_char": "ヵ", "rarity": 1, "roma_id": "xka", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  "k_xke": { "display_char": "ヶ", "rarity": 1, "roma_id": "xke", "dan_id": "e_dan", "gyo_id": "ka_gyo" },

  // 外来語表記用 (Rarity 2)
  "k_vu": { "display_char": "ヴ", "rarity": 2, "roma_id": "vu", "dan_id": "u_dan", "gyo_id": "ba_gyo" },
  "k_va": { "display_char": "ヴァ", "rarity": 2, "roma_id": "va", "dan_id": "a_dan", "gyo_id": "ba_gyo" },
  "k_vi": { "display_char": "ヴィ", "rarity": 2, "roma_id": "vi", "dan_id": "i_dan", "gyo_id": "ba_gyo" },
  "k_ve": { "display_char": "ヴェ", "rarity": 2, "roma_id": "ve", "dan_id": "e_dan", "gyo_id": "ba_gyo" },
  "k_vo": { "display_char": "ヴォ", "rarity": 2, "roma_id": "vo", "dan_id": "o_dan", "gyo_id": "ba_gyo" },
  "k_vya": { "display_char": "ヴャ", "rarity": 2, "roma_id": "vya", "dan_id": "i_dan", "gyo_id": "ba_gyo" },
  "k_vyu": { "display_char": "ヴュ", "rarity": 2, "roma_id": "vyu", "dan_id": "i_dan", "gyo_id": "ba_gyo" },
  "k_vyo": { "display_char": "ヴョ", "rarity": 2, "roma_id": "vyo", "dan_id": "i_dan", "gyo_id": "ba_gyo" },

  "k_she": { "display_char": "シェ", "rarity": 2, "roma_id": "she", "dan_id": "i_dan", "gyo_id": "sa_gyo" },
  "k_je": { "display_char": "ジェ", "rarity": 2, "roma_id": "je", "dan_id": "i_dan", "gyo_id": "za_gyo" },
  "k_che": { "display_char": "チェ", "rarity": 2, "roma_id": "che", "dan_id": "i_dan", "gyo_id": "ta_gyo" },

  "k_ti": { "display_char": "ティ", "rarity": 2, "roma_id": "ti", "dan_id": "i_dan", "gyo_id": "ta_gyo" },
  "k_di": { "display_char": "ディ", "rarity": 2, "roma_id": "dexi", "dan_id": "i_dan", "gyo_id": "da_gyo" }, // roma_idは di と区別
  "k_tu": { "display_char": "トゥ", "rarity": 2, "roma_id": "toxu", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // roma_idは tsu と区別
  "k_du": { "display_char": "ドゥ", "rarity": 2, "roma_id": "doxu", "dan_id": "u_dan", "gyo_id": "da_gyo" }, // roma_idは du と区別

  "k_fa": { "display_char": "ファ", "rarity": 2, "roma_id": "fa", "dan_id": "u_dan", "gyo_id": "ha_gyo" },
  "k_fi": { "display_char": "フィ", "rarity": 2, "roma_id": "fi", "dan_id": "u_dan", "gyo_id": "ha_gyo" },
  "k_fe": { "display_char": "フェ", "rarity": 2, "roma_id": "fe", "dan_id": "u_dan", "gyo_id": "ha_gyo" },
  "k_fo": { "display_char": "フォ", "rarity": 2, "roma_id": "fo", "dan_id": "u_dan", "gyo_id": "ha_gyo" },
  "k_fyu": { "display_char": "フュ", "rarity": 2, "roma_id": "fyu", "dan_id": "u_dan", "gyo_id": "ha_gyo" },

  "k_wi": { "display_char": "ウィ", "rarity": 2, "roma_id": "wi", "dan_id": "u_dan", "gyo_id": "wa_gyo" },
  "k_we": { "display_char": "ウェ", "rarity": 2, "roma_id": "we", "dan_id": "u_dan", "gyo_id": "wa_gyo" },
  "k_who": { "display_char": "ウォ", "rarity": 2, "roma_id": "who", "dan_id": "u_dan", "gyo_id": "wa_gyo" },

  // --- 9. 特殊記号 ---
  // Rarity: 1-3 (ボスは Rarity 3)
  "sym_bikkuri": { "display_char": "！", "rarity": 3, "roma_id": "bikkuri", "dan_id": "n_dan", "gyo_id": "n_gyo" }, // W4ボス
  "sym_hatena": { "display_char": "？", "rarity": 3, "roma_id": "hatena", "dan_id": "n_dan", "gyo_id": "n_gyo" }, // W4ボス
  "sym_ando": { "display_char": "＆", "rarity": 3, "roma_id": "ando", "dan_id": "n_dan", "gyo_id": "n_gyo" }, // W4ボス
  "sym_touten": { "display_char": "、", "rarity": 1, "roma_id": "touten", "dan_id": "n_dan", "gyo_id": "n_gyo" },
  "sym_kuten": { "display_char": "。", "rarity": 1, "roma_id": "kuten", "dan_id": "n_dan", "gyo_id": "n_gyo" },
  "sym_nakaguro": { "display_char": "・", "rarity": 1, "roma_id": "nakaguro", "dan_id": "n_dan", "gyo_id": "n_gyo" },
  "sym_chouon": { "display_char": "ー", "rarity": 1, "roma_id": "chouon", "dan_id": "n_dan", "gyo_id": "n_gyo" },
  "sym_kakko_s": { "display_char": "（", "rarity": 1, "roma_id": "kakko_s", "dan_id": "n_dan", "gyo_id": "n_gyo" },
  "sym_kakko_e": { "display_char": "）", "rarity": 1, "roma_id": "kakko_e", "dan_id": "n_dan", "gyo_id": "n_gyo" },
  "sym_key_s": { "display_char": "「", "rarity": 1, "roma_id": "key_s", "dan_id": "n_dan", "gyo_id": "n_gyo" },
  "sym_key_e": { "display_char": "」", "rarity": 1, "roma_id": "key_e", "dan_id": "n_dan", "gyo_id": "n_gyo" },
  "sym_santen": { "display_char": "…", "rarity": 1, "roma_id": "santen", "dan_id": "n_dan", "gyo_id": "n_gyo" },
  "sym_nami": { "display_char": "〜", "rarity": 1, "roma_id": "nami", "dan_id": "n_dan", "gyo_id": "n_gyo" },
  "sym_daku": { "display_char": "゛", "rarity": 1, "roma_id": "daku", "dan_id": "n_dan", "gyo_id": "n_gyo" },
  "sym_handaku": { "display_char": "゜", "rarity": 1, "roma_id": "handaku", "dan_id": "n_dan", "gyo_id": "n_gyo" },

  // --- 10. アルファベット (大文字) ---
  // Rarity: 3 (漢字と同等のレアリティ)
  "alpha_A": { "display_char": "Ａ", "rarity": 3, "roma_id": "a", "dan_id": "a_dan", "gyo_id": "alpha" },
  "alpha_B": { "display_char": "Ｂ", "rarity": 3, "roma_id": "b", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_C": { "display_char": "Ｃ", "rarity": 3, "roma_id": "c", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_D": { "display_char": "Ｄ", "rarity": 3, "roma_id": "d", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_E": { "display_char": "Ｅ", "rarity": 3, "roma_id": "e", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_F": { "display_char": "Ｆ", "rarity": 3, "roma_id": "f", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_G": { "display_char": "Ｇ", "rarity": 3, "roma_id": "g", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_H": { "display_char": "Ｈ", "rarity": 3, "roma_id": "h", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_I": { "display_char": "Ｉ", "rarity": 3, "roma_id": "i", "dan_id": "i_dan", "gyo_id": "alpha" },
  "alpha_J": { "display_char": "Ｊ", "rarity": 3, "roma_id": "j", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_K": { "display_char": "Ｋ", "rarity": 3, "roma_id": "k", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_L": { "display_char": "Ｌ", "rarity": 3, "roma_id": "l", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_M": { "display_char": "Ｍ", "rarity": 3, "roma_id": "m", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_N": { "display_char": "Ｎ", "rarity": 3, "roma_id": "n", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_O": { "display_char": "Ｏ", "rarity": 3, "roma_id": "o", "dan_id": "o_dan", "gyo_id": "alpha" },
  "alpha_P": { "display_char": "Ｐ", "rarity": 3, "roma_id": "p", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_Q": { "display_char": "Ｑ", "rarity": 3, "roma_id": "q", "dan_id": "u_dan", "gyo_id": "alpha" },
  "alpha_R": { "display_char": "Ｒ", "rarity": 3, "roma_id": "r", "dan_id": "a_dan", "gyo_id": "alpha" },
  "alpha_S": { "display_char": "Ｓ", "rarity": 3, "roma_id": "s", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_T": { "display_char": "Ｔ", "rarity": 3, "roma_id": "t", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_U": { "display_char": "Ｕ", "rarity": 3, "roma_id": "u", "dan_id": "u_dan", "gyo_id": "alpha" },
  "alpha_V": { "display_char": "Ｖ", "rarity": 3, "roma_id": "v", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_W": { "display_char": "Ｗ", "rarity": 3, "roma_id": "w", "dan_id": "u_dan", "gyo_id": "alpha" },
  "alpha_X": { "display_char": "Ｘ", "rarity": 3, "roma_id": "x", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_Y": { "display_char": "Ｙ", "rarity": 3, "roma_id": "y", "dan_id": "i_dan", "gyo_id": "alpha" },
  "alpha_Z": { "display_char": "Ｚ", "rarity": 3, "roma_id": "z", "dan_id": "e_dan", "gyo_id": "alpha" },

  // --- 11. アルファベット (小文字) ---
  // Rarity: 3
  "alpha_a": { "display_char": "ａ", "rarity": 3, "roma_id": "a", "dan_id": "a_dan", "gyo_id": "alpha" },
  "alpha_b": { "display_char": "ｂ", "rarity": 3, "roma_id": "b", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_c": { "display_char": "ｃ", "rarity": 3, "roma_id": "c", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_d": { "display_char": "ｄ", "rarity": 3, "roma_id": "d", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_e": { "display_char": "ｅ", "rarity": 3, "roma_id": "e", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_f": { "display_char": "ｆ", "rarity": 3, "roma_id": "f", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_g": { "display_char": "ｇ", "rarity": 3, "roma_id": "g", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_h": { "display_char": "ｈ", "rarity": 3, "roma_id": "h", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_i": { "display_char": "ｉ", "rarity": 3, "roma_id": "i", "dan_id": "i_dan", "gyo_id": "alpha" },
  "alpha_j": { "display_char": "ｊ", "rarity": 3, "roma_id": "j", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_k": { "display_char": "ｋ", "rarity": 3, "roma_id": "k", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_l": { "display_char": "ｌ", "rarity": 3, "roma_id": "l", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_m": { "display_char": "ｍ", "rarity": 3, "roma_id": "m", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_n": { "display_char": "ｎ", "rarity": 3, "roma_id": "n", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_o": { "display_char": "ｏ", "rarity": 3, "roma_id": "o", "dan_id": "o_dan", "gyo_id": "alpha" },
  "alpha_p": { "display_char": "ｐ", "rarity": 3, "roma_id": "p", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_q": { "display_char": "ｑ", "rarity": 3, "roma_id": "q", "dan_id": "u_dan", "gyo_id": "alpha" },
  "alpha_r": { "display_char": "ｒ", "rarity": 3, "roma_id": "r", "dan_id": "a_dan", "gyo_id": "alpha" },
  "alpha_s": { "display_char": "ｓ", "rarity": 3, "roma_id": "s", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_t": { "display_char": "ｔ", "rarity": 3, "roma_id": "t", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_u": { "display_char": "ｕ", "rarity": 3, "roma_id": "u", "dan_id": "u_dan", "gyo_id": "alpha" },
  "alpha_v": { "display_char": "ｖ", "rarity": 3, "roma_id": "v", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_w": { "display_char": "ｗ", "rarity": 3, "roma_id": "w", "dan_id": "u_dan", "gyo_id": "alpha" },
  "alpha_x": { "display_char": "ｘ", "rarity": 3, "roma_id": "x", "dan_id": "e_dan", "gyo_id": "alpha" },
  "alpha_y": { "display_char": "ｙ", "rarity": 3, "roma_id": "y", "dan_id": "i_dan", "gyo_id": "alpha" },
  "alpha_z": { "display_char": "ｚ", "rarity": 3, "roma_id": "z", "dan_id": "e_dan", "gyo_id": "alpha" },

  // --- 12. 数字 ---
  // Rarity: 3
  "num_0": { "display_char": "０", "rarity": 3, "roma_id": "zero", "dan_id": "n_dan", "gyo_id": "number" },
  "num_1": { "display_char": "１", "rarity": 3, "roma_id": "ichi", "dan_id": "n_dan", "gyo_id": "number" },
  "num_2": { "display_char": "２", "rarity": 3, "roma_id": "ni", "dan_id": "n_dan", "gyo_id": "number" },
  "num_3": { "display_char": "３", "rarity": 3, "roma_id": "san", "dan_id": "n_dan", "gyo_id": "number" },
  "num_4": { "display_char": "４", "rarity": 3, "roma_id": "yon", "dan_id": "n_dan", "gyo_id": "number" },
  "num_5": { "display_char": "５", "rarity": 3, "roma_id": "go", "dan_id": "n_dan", "gyo_id": "number" },
  "num_6": { "display_char": "６", "rarity": 3, "roma_id": "roku", "dan_id": "n_dan", "gyo_id": "number" },
  "num_7": { "display_char": "７", "rarity": 3, "roma_id": "nana", "dan_id": "n_dan", "gyo_id": "number" },
  "num_8": { "display_char": "８", "rarity": 3, "roma_id": "hachi", "dan_id": "n_dan", "gyo_id": "number" },
  "num_9": { "display_char": "９", "rarity": 3, "roma_id": "kyuu", "dan_id": "n_dan", "gyo_id": "number" }
// --- 13. 漢字 (小学1年生・前半40字) ---
  // Rarity: 3 (W2-W3での登場を想定)
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義
  // ID競合は `kan_[reading]2` `kan_[reading]3` ... で解決

  // 漢字: 一
  "kan_ichi": { "display_char": "一", "rarity": 3, "roma_id": "ichi", "dan_id": "i_dan", "gyo_id": "a_gyo" },
  "kan_itsu": { "display_char": "一", "rarity": 3, "roma_id": "itsu", "dan_id": "u_dan", "gyo_id": "a_gyo" },
  "kan_hito": { "display_char": "一", "rarity": 3, "roma_id": "hito", "dan_id": "i_dan", "gyo_id": "ha_gyo" },
  // 漢字: 二
  "kan_ni": { "display_char": "二", "rarity": 3, "roma_id": "ni", "dan_id": "i_dan", "gyo_id": "na_gyo" },
  "kan_futa": { "display_char": "二", "rarity": 3, "roma_id": "futa", "dan_id": "u_dan", "gyo_id": "ha_gyo" },
  // 漢字: 三
  "kan_san": { "display_char": "三", "rarity": 3, "roma_id": "san", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  "kan_mi": { "display_char": "三", "rarity": 3, "roma_id": "mi", "dan_id": "i_dan", "gyo_id": "ma_gyo" },
  // 漢字: 四
  "kan_shi": { "display_char": "四", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" },
  "kan_yon": { "display_char": "四", "rarity": 3, "roma_id": "yon", "dan_id": "o_dan", "gyo_id": "ya_gyo" },
  "kan_yo": { "display_char": "四", "rarity": 3, "roma_id": "yo", "dan_id": "o_dan", "gyo_id": "ya_gyo" },
  // 漢字: 五
  "kan_go": { "display_char": "五", "rarity": 3, "roma_id": "go", "dan_id": "o_dan", "gyo_id": "ga_gyo" },
  "kan_itsu2": { "display_char": "五", "rarity": 3, "roma_id": "itsu", "dan_id": "u_dan", "gyo_id": "a_gyo" }, // 一(itsu)と競合
  // 漢字: 六
  "kan_roku": { "display_char": "六", "rarity": 3, "roma_id": "roku", "dan_id": "o_dan", "gyo_id": "ra_gyo" },
  "kan_mu": { "display_char": "六", "rarity": 3, "roma_id": "mu", "dan_id": "u_dan", "gyo_id": "ma_gyo" },
  "kan_mui": { "display_char": "六", "rarity": 3, "roma_id": "mui", "dan_id": "u_dan", "gyo_id": "ma_gyo" },
  // 漢字: 七
  "kan_shichi": { "display_char": "七", "rarity": 3, "roma_id": "shichi", "dan_id": "i_dan", "gyo_id": "sa_gyo" },
  "kan_nana": { "display_char": "七", "rarity": 3, "roma_id": "nana", "dan_id": "a_dan", "gyo_id": "na_gyo" },
  "kan_nano": { "display_char": "七", "rarity": 3, "roma_id": "nano", "dan_id": "o_dan", "gyo_id": "na_gyo" },
  // 漢字: 八
  "kan_hachi": { "display_char": "八", "rarity": 3, "roma_id": "hachi", "dan_id": "a_dan", "gyo_id": "ha_gyo" },
  "kan_ya": { "display_char": "八", "rarity": 3, "roma_id": "ya", "dan_id": "a_dan", "gyo_id": "ya_gyo" },
  "kan_you": { "display_char": "八", "rarity": 3, "roma_id": "you", "dan_id": "o_dan", "gyo_id": "ya_gyo" },
  // 漢字: 九
  "kan_kyuu": { "display_char": "九", "rarity": 3, "roma_id": "kyuu", "dan_id": "u_dan", "gyo_id": "ka_gyo" },
  "kan_ku": { "display_char": "九", "rarity": 3, "roma_id": "ku", "dan_id": "u_dan", "gyo_id": "ka_gyo" },
  "kan_kokono": { "display_char": "九", "rarity": 3, "roma_id": "kokono", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  // 漢字: 十
  "kan_juu": { "display_char": "十", "rarity": 3, "roma_id": "juu", "dan_id": "u_dan", "gyo_id": "za_gyo" },
  "kan_ji": { "display_char": "十", "rarity": 3, "roma_id": "ji", "dan_id": "i_dan", "gyo_id": "za_gyo" },
  "kan_tou": { "display_char": "十", "rarity": 3, "roma_id": "tou", "dan_id": "o_dan", "gyo_id": "ta_gyo" },
  "kan_to": { "display_char": "十", "rarity": 3, "roma_id": "to", "dan_id": "o_dan", "gyo_id": "ta_gyo" },
  // 漢字: 百
  "kan_hyaku": { "display_char": "百", "rarity": 3, "roma_id": "hyaku", "dan_id": "a_dan", "gyo_id": "ha_gyo" },
  "kan_byaku": { "display_char": "百", "rarity": 3, "roma_id": "byaku", "dan_id": "a_dan", "gyo_id": "ba_gyo" },
  // 漢字: 千
  "kan_sen": { "display_char": "千", "rarity": 3, "roma_id": "sen", "dan_id": "e_dan", "gyo_id": "sa_gyo" },
  "kan_chi": { "display_char": "千", "rarity": 3, "roma_id": "chi", "dan_id": "i_dan", "gyo_id": "ta_gyo" },
  // 漢字: 万
  "kan_man": { "display_char": "万", "rarity": 3, "roma_id": "man", "dan_id": "a_dan", "gyo_id": "ma_gyo" },
  "kan_ban": { "display_char": "万", "rarity": 3, "roma_id": "ban", "dan_id": "a_dan", "gyo_id": "ba_gyo" },
  // 漢字: 円
  "kan_en": { "display_char": "円", "rarity": 3, "roma_id": "en", "dan_id": "e_dan", "gyo_id": "a_gyo" },
  "kan_maru": { "display_char": "円", "rarity": 3, "roma_id": "maru", "dan_id": "a_dan", "gyo_id": "ma_gyo" },
  // 漢字: 年
  "kan_nen": { "display_char": "年", "rarity": 3, "roma_id": "nen", "dan_id": "e_dan", "gyo_id": "na_gyo" },
  "kan_toshi": { "display_char": "年", "rarity": 3, "roma_id": "toshi", "dan_id": "o_dan", "gyo_id": "ta_gyo" },
  // 漢字: 王
  "kan_ou": { "display_char": "王", "rarity": 3, "roma_id": "ou", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // プロット W3ボス
  "kan_nou": { "display_char": "王", "rarity": 3, "roma_id": "nou", "dan_id": "o_dan", "gyo_id": "na_gyo" },
  // 漢字: 人
  "kan_jin": { "display_char": "人", "rarity": 3, "roma_id": "jin", "dan_id": "i_dan", "gyo_id": "za_gyo" }, // 四字熟語用
  "kan_nin": { "display_char": "人", "rarity": 3, "roma_id": "nin", "dan_id": "i_dan", "gyo_id": "na_gyo" }, // 四字熟語用
  "kan_hito2": { "display_char": "人", "rarity": 3, "roma_id": "hito", "dan_id": "i_dan", "gyo_id": "ha_gyo" }, // プロット W2ボス (一(hito)と競合)
  // 漢字: 子
  "kan_shi2": { "display_char": "子", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // 四(shi)と競合
  "kan_su": { "display_char": "子", "rarity": 3, "roma_id": "su", "dan_id": "u_dan", "gyo_id": "sa_gyo" },
  "kan_ko": { "display_char": "子", "rarity": 3, "roma_id": "ko", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  // 漢字: 学
  "kan_gaku": { "display_char": "学", "rarity": 3, "roma_id": "gaku", "dan_id": "a_dan", "gyo_id": "ga_gyo" },
  "kan_mana": { "display_char": "学", "rarity": 3, "roma_id": "mana", "dan_id": "a_dan", "gyo_id": "ma_gyo" },
  // 漢字: 校
  "kan_kou": { "display_char": "校", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  "kan_kyou": { "display_char": "校", "rarity": 3, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  // 漢字: 先
  "kan_sen2": { "display_char": "先", "rarity": 3, "roma_id": "sen", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // 千(sen)と競合
  "kan_saki": { "display_char": "先", "rarity": 3, "roma_id": "saki", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  // 漢字: 生
  "kan_sei": { "display_char": "生", "rarity": 3, "roma_id": "sei", "dan_id": "e_dan", "gyo_id": "sa_gyo" },
  "kan_shou": { "display_char": "生", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" },
  "kan_i": { "display_char": "生", "rarity": 3, "roma_id": "i", "dan_id": "i_dan", "gyo_id": "a_gyo" },
  "kan_u": { "display_char": "生", "rarity": 3, "roma_id": "u", "dan_id": "u_dan", "gyo_id": "a_gyo" },
  "kan_o": { "display_char": "生", "rarity": 3, "roma_id": "o", "dan_id": "o_dan", "gyo_id": "a_gyo" },
  "kan_ha": { "display_char": "生", "rarity": 3, "roma_id": "ha", "dan_id": "a_dan", "gyo_id": "ha_gyo" },
  "kan_ki": { "display_char": "生", "rarity": 3, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  "kan_nama": { "display_char": "生", "rarity": 3, "roma_id": "nama", "dan_id": "a_dan", "gyo_id": "na_gyo" },
  // 漢字: 山
  "kan_san2": { "display_char": "山", "rarity": 3, "roma_id": "san", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // 三(san)と競合
  "kan_yama": { "display_char": "山", "rarity": 3, "roma_id": "yama", "dan_id": "a_dan", "gyo_id": "ya_gyo" },
  // 漢字: 川
  "kan_sen3": { "display_char": "川", "rarity": 3, "roma_id": "sen", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // 千(sen), 先(sen)と競合
  "kan_kawa": { "display_char": "川", "rarity": 3, "roma_id": "kawa", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 田
  "kan_den": { "display_char": "田", "rarity": 3, "roma_id": "den", "dan_id": "e_dan", "gyo_id": "da_gyo" },
  "kan_ta": { "display_char": "田", "rarity": 3, "roma_id": "ta", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  // 漢字: 日
  "kan_nichi": { "display_char": "日", "rarity": 3, "roma_id": "nichi", "dan_id": "i_dan", "gyo_id": "na_gyo" },
  "kan_jitsu": { "display_char": "日", "rarity": 3, "roma_id": "jitsu", "dan_id": "i_dan", "gyo_id": "za_gyo" },
  "kan_hi": { "display_char": "日", "rarity": 3, "roma_id": "hi", "dan_id": "i_dan", "gyo_id": "ha_gyo" },
  "kan_ka": { "display_char": "日", "rarity": 3, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 月
  "kan_getsu": { "display_char": "月", "rarity": 3, "roma_id": "getsu", "dan_id": "e_dan", "gyo_id": "ga_gyo" },
  "kan_gatsu": { "display_char": "月", "rarity": 3, "roma_id": "gatsu", "dan_id": "a_dan", "gyo_id": "ga_gyo" },
  "kan_tsuki": { "display_char": "月", "rarity": 3, "roma_id": "tsuki", "dan_id": "u_dan", "gyo_id": "ta_gyo" },
  // 漢字: 火
  "kan_ka2": { "display_char": "火", "rarity": 3, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 日(ka)と競合
  "kan_hi2": { "display_char": "火", "rarity": 3, "roma_id": "hi", "dan_id": "i_dan", "gyo_id": "ha_gyo" }, // 日(hi)と競合
  "kan_bi": { "display_char": "火", "rarity": 3, "roma_id": "bi", "dan_id": "i_dan", "gyo_id": "ba_gyo" },
  "kan_ho": { "display_char": "火", "rarity": 3, "roma_id": "ho", "dan_id": "o_dan", "gyo_id": "ha_gyo" },
  // 漢字: 水
  "kan_sui": { "display_char": "水", "rarity": 3, "roma_id": "sui", "dan_id": "u_dan", "gyo_id": "sa_gyo" },
  "kan_mizu": { "display_char": "水", "rarity": 3, "roma_id": "mizu", "dan_id": "u_dan", "gyo_id": "ma_gyo" },
  // 漢字: 木
  "kan_moku": { "display_char": "木", "rarity": 3, "roma_id": "moku", "dan_id": "o_dan", "gyo_id": "ma_gyo" },
  "kan_boku": { "display_char": "木", "rarity": 3, "roma_id": "boku", "dan_id": "o_dan", "gyo_id": "ba_gyo" },
  "kan_ki2": { "display_char": "木", "rarity": 3, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // 生(ki)と競合
  "kan_ko2": { "display_char": "木", "rarity": 3, "roma_id": "ko", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 子(ko)と競合
  // 漢字: 金
  "kan_kin": { "display_char": "金", "rarity": 3, "roma_id": "kin", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  "kan_kon": { "display_char": "金", "rarity": 3, "roma_id": "kon", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  "kan_kane": { "display_char": "金", "rarity": 3, "roma_id": "kane", "dan_id": "e_dan", "gyo_id": "ka_gyo" },
  "kan_kana": { "display_char": "金", "rarity": 3, "roma_id": "kana", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 土
  "kan_do": { "display_char": "土", "rarity": 3, "roma_id": "do", "dan_id": "o_dan", "gyo_id": "da_gyo" },
  "kan_to2": { "display_char": "土", "rarity": 3, "roma_id": "to", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // 十(to)と競合
  "kan_tsuchi": { "display_char": "土", "rarity": 3, "roma_id": "tsuchi", "dan_id": "u_dan", "gyo_id": "ta_gyo" },
  // 漢字: 上
  "kan_jou": { "display_char": "上", "rarity": 3, "roma_id": "jou", "dan_id": "o_dan", "gyo_id": "za_gyo" },
  "kan_shou2": { "display_char": "上", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 生(shou)と競合
  "kan_ue": { "display_char": "上", "rarity": 3, "roma_id": "ue", "dan_id": "u_dan", "gyo_id": "a_gyo" },
  "kan_uwa": { "display_char": "上", "rarity": 3, "roma_id": "uwa", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  "kan_kami": { "display_char": "上", "rarity": 3, "roma_id": "kami", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  "kan_a": { "display_char": "上", "rarity": 3, "roma_id": "a", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  "kan_nobo": { "display_char": "上", "rarity": 3, "roma_id": "nobo", "dan_id": "o_dan", "gyo_id": "na_gyo" },
  // 漢字: 下
  "kan_ka3": { "display_char": "下", "rarity": 3, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 日(ka), 火(ka)と競合
  "kan_ge": { "display_char": "下", "rarity": 3, "roma_id": "ge", "dan_id": "e_dan", "gyo_id": "ga_gyo" },
  "kan_shita": { "display_char": "下", "rarity": 3, "roma_id": "shita", "dan_id": "i_dan", "gyo_id": "sa_gyo" },
  "kan_shimo": { "display_char": "下", "rarity": 3, "roma_id": "shimo", "dan_id": "i_dan", "gyo_id": "sa_gyo" },
  "kan_moto": { "display_char": "下", "rarity": 3, "roma_id": "moto", "dan_id": "o_dan", "gyo_id": "ma_gyo" },
  "kan_sa": { "display_char": "下", "rarity": 3, "roma_id": "sa", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  "kan_kuda": { "display_char": "下", "rarity": 3, "roma_id": "kuda", "dan_id": "u_dan", "gyo_id": "ka_gyo" },
  "kan_o2": { "display_char": "下", "rarity": 3, "roma_id": "o", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // 生(o)と競合
  // 漢字: 中
  "kan_chuu": { "display_char": "中", "rarity": 3, "roma_id": "chuu", "dan_id": "u_dan", "gyo_id": "ta_gyo" },
  "kan_juu2": { "display_char": "中", "rarity": 3, "roma_id": "juu", "dan_id": "u_dan", "gyo_id": "za_gyo" }, // 十(juu)と競合
  "kan_naka": { "display_char": "中", "rarity": 3, "roma_id": "naka", "dan_id": "a_dan", "gyo_id": "na_gyo" },
  "kan_uchi": { "display_char": "中", "rarity": 3, "roma_id": "uchi", "dan_id": "u_dan", "gyo_id": "a_gyo" },
  "kan_ata": { "display_char": "中", "rarity": 3, "roma_id": "ata", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  // 漢字: 左
  "kan_sa2": { "display_char": "左", "rarity": 3, "roma_id": "sa", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // 下(sa)と競合
  "kan_hidari": { "display_char": "左", "rarity": 3, "roma_id": "hidari", "dan_id": "i_dan", "gyo_id": "ha_gyo" },
  // 漢字: 右
  "kan_yuu": { "display_char": "右", "rarity": 3, "roma_id": "yuu", "dan_id": "u_dan", "gyo_id": "ya_gyo" },
  "kan_u2": { "display_char": "右", "rarity": 3, "roma_id": "u", "dan_id": "u_dan", "gyo_id": "a_gyo" }, // 生(u)と競合
  "kan_migi": { "display_char": "右", "rarity": 3, "roma_id": "migi", "dan_id": "i_dan", "gyo_id": "ma_gyo" },

  // --- 13. 漢字 (小学1年生・後半40字) ---
  // Rarity: 3 (W2-W3での登場を想定)
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 東
  "kan_tou2": { "display_char": "東", "rarity": 3, "roma_id": "tou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // 十(tou)と競合
  "kan_higashi": { "display_char": "東", "rarity": 3, "roma_id": "higashi", "dan_id": "i_dan", "gyo_id": "ha_gyo" },
  // 漢字: 西
  "kan_sei2": { "display_char": "西", "rarity": 3, "roma_id": "sei", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // 生(sei)と競合
  "kan_sai": { "display_char": "西", "rarity": 3, "roma_id": "sai", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  "kan_nishi": { "display_char": "西", "rarity": 3, "roma_id": "nishi", "dan_id": "i_dan", "gyo_id": "na_gyo" },
  // 漢字: 南
  "kan_nan": { "display_char": "南", "rarity": 3, "roma_id": "nan", "dan_id": "a_dan", "gyo_id": "na_gyo" },
  "kan_na": { "display_char": "南", "rarity": 3, "roma_id": "na", "dan_id": "a_dan", "gyo_id": "na_gyo" },
  "kan_minami": { "display_char": "南", "rarity": 3, "roma_id": "minami", "dan_id": "i_dan", "gyo_id": "ma_gyo" },
  // 漢字: 北
  "kan_hoku": { "display_char": "北", "rarity": 3, "roma_id": "hoku", "dan_id": "o_dan", "gyo_id": "ha_gyo" },
  "kan_kita": { "display_char": "北", "rarity": 3, "roma_id": "kita", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  // 漢字: 天
  "kan_ten": { "display_char": "天", "rarity": 3, "roma_id": "ten", "dan_id": "e_dan", "gyo_id": "ta_gyo" },
  "kan_ame2": { "display_char": "天", "rarity": 3, "roma_id": "ame", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // 雨(ame)と競合
  "kan_ama": { "display_char": "天", "rarity": 3, "roma_id": "ama", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  // 漢字: 気
  "kan_ki3": { "display_char": "気", "rarity": 3, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // 生(ki), 木(ki)と競合
  "kan_ke": { "display_char": "気", "rarity": 3, "roma_id": "ke", "dan_id": "e_dan", "gyo_id": "ka_gyo" },
  // 漢字: 雨
  "kan_u3": { "display_char": "雨", "rarity": 3, "roma_id": "u", "dan_id": "u_dan", "gyo_id": "a_gyo" }, // 生(u), 右(u)と競合
  "kan_ame": { "display_char": "雨", "rarity": 3, "roma_id": "ame", "dan_id": "e_dan", "gyo_id": "a_gyo" },
  "kan_ama2": { "display_char": "雨", "rarity": 3, "roma_id": "ama", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // 天(ama)と競合
  // 漢字: 空
  "kan_kuu": { "display_char": "空", "rarity": 3, "roma_id": "kuu", "dan_id": "u_dan", "gyo_id": "ka_gyo" },
  "kan_sora": { "display_char": "空", "rarity": 3, "roma_id": "sora", "dan_id": "o_dan", "gyo_id": "sa_gyo" },
  "kan_a2": { "display_char": "空", "rarity": 3, "roma_id": "a", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // 上(a)と競合
  "kan_kara": { "display_char": "空", "rarity": 3, "roma_id": "kara", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 白
  "kan_haku": { "display_char": "白", "rarity": 3, "roma_id": "haku", "dan_id": "a_dan", "gyo_id": "ha_gyo" },
  "kan_byaku2": { "display_char": "白", "rarity": 3, "roma_id": "byaku", "dan_id": "a_dan", "gyo_id": "ba_gyo" }, // 百(byaku)と競合
  "kan_shiro": { "display_char": "白", "rarity": 3, "roma_id": "shiro", "dan_id": "i_dan", "gyo_id": "sa_gyo" },
  "kan_shira": { "display_char": "白", "rarity": 3, "roma_id": "shira", "dan_id": "i_dan", "gyo_id": "sa_gyo" },
  // 漢字: 赤
  "kan_seki": { "display_char": "赤", "rarity": 3, "roma_id": "seki", "dan_id": "e_dan", "gyo_id": "sa_gyo" },
  "kan_shaku": { "display_char": "赤", "rarity": 3, "roma_id": "shaku", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  "kan_aka": { "display_char": "赤", "rarity": 3, "roma_id": "aka", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  "kan_aka2": { "display_char": "赤", "rarity": 3, "roma_id": "aka", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // 競合
  // 漢字: 青
  "kan_sei3": { "display_char": "青", "rarity": 3, "roma_id": "sei", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // 生(sei), 西(sei)と競合
  "kan_shou3": { "display_char": "青", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 生(shou), 上(shou)と競合
  "kan_ao": { "display_char": "青", "rarity": 3, "roma_id": "ao", "dan_id": "o_dan", "gyo_id": "a_gyo" },
  "kan_ao2": { "display_char": "青", "rarity": 3, "roma_id": "ao", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // 競合
  // 漢字: 目
  "kan_moku2": { "display_char": "目", "rarity": 3, "roma_id": "moku", "dan_id": "o_dan", "gyo_id": "ma_gyo" }, // 木(moku)と競合
  "kan_boku2": { "display_char": "目", "rarity": 3, "roma_id": "boku", "dan_id": "o_dan", "gyo_id": "ba_gyo" }, // 木(boku)と競合
  "kan_me": { "display_char": "目", "rarity": 3, "roma_id": "me", "dan_id": "e_dan", "gyo_id": "ma_gyo" },
  "kan_ma2": { "display_char": "目", "rarity": 3, "roma_id": "ma", "dan_id": "a_dan", "gyo_id": "ma_gyo" },
  // 漢字: 耳
  "kan_ji2": { "display_char": "耳", "rarity": 3, "roma_id": "ji", "dan_id": "i_dan", "gyo_id": "za_gyo" }, // 十(ji)と競合
  "kan_mimi": { "display_char": "耳", "rarity": 3, "roma_id": "mimi", "dan_id": "i_dan", "gyo_id": "ma_gyo" },
  // 漢字: 口
  "kan_kou2": { "display_char": "口", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 校(kou)と競合
  "kan_ku2": { "display_char": "口", "rarity": 3, "roma_id": "ku", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 九(ku)と競合
  "kan_kuchi": { "display_char": "口", "rarity": 3, "roma_id": "kuchi", "dan_id": "u_dan", "gyo_id": "ka_gyo" },
  // 漢字: 手
  "kan_shu": { "display_char": "手", "rarity": 3, "roma_id": "shu", "dan_id": "u_dan", "gyo_id": "sa_gyo" },
  "kan_zu": { "display_char": "手", "rarity": 3, "roma_id": "zu", "dan_id": "u_dan", "gyo_id": "za_gyo" },
  "kan_te": { "display_char": "手", "rarity": 3, "roma_id": "te", "dan_id": "e_dan", "gyo_id": "ta_gyo" },
  "kan_ta2": { "display_char": "手", "rarity": 3, "roma_id": "ta", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // 田(ta)と競合
  // 漢字: 足
  "kan_soku": { "display_char": "足", "rarity": 3, "roma_id": "soku", "dan_id": "o_dan", "gyo_id": "sa_gyo" },
  "kan_ashi": { "display_char": "足", "rarity": 3, "roma_id": "ashi", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  "kan_ta3": { "display_char": "足", "rarity": 3, "roma_id": "ta", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // 田(ta), 手(ta)と競合
  // 漢字: 力
  "kan_ryoku": { "display_char": "力", "rarity": 3, "roma_id": "ryoku", "dan_id": "o_dan", "gyo_id": "ra_gyo" },
  "kan_riki": { "display_char": "力", "rarity": 3, "roma_id": "riki", "dan_id": "i_dan", "gyo_id": "ra_gyo" },
  "kan_chikara": { "display_char": "力", "rarity": 3, "roma_id": "chikara", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  // 漢字: 男
  "kan_dan": { "display_char": "男", "rarity": 3, "roma_id": "dan", "dan_id": "a_dan", "gyo_id": "da_gyo" },
  "kan_nan2": { "display_char": "男", "rarity": 3, "roma_id": "nan", "dan_id": "a_dan", "gyo_id": "na_gyo" }, // 南(nan)と競合
  "kan_otoko": { "display_char": "男", "rarity": 3, "roma_id": "otoko", "dan_id": "o_dan", "gyo_id": "a_gyo" },
  // 漢字: 女
  "kan_jo": { "display_char": "女", "rarity": 3, "roma_id": "jo", "dan_id": "o_dan", "gyo_id": "za_gyo" },
  "kan_nyo": { "display_char": "女", "rarity": 3, "roma_id": "nyo", "dan_id": "o_dan", "gyo_id": "na_gyo" },
  "kan_nyou": { "display_char": "女", "rarity": 3, "roma_id": "nyou", "dan_id": "o_dan", "gyo_id": "na_gyo" },
  "kan_onna": { "display_char": "女", "rarity": 3, "roma_id": "onna", "dan_id": "o_dan", "gyo_id": "a_gyo" },
  "kan_me2": { "display_char": "女", "rarity": 3, "roma_id": "me", "dan_id": "e_dan", "gyo_id": "ma_gyo" }, // 目(me)と競合
  // 漢字: 父
  "kan_fu": { "display_char": "父", "rarity": 3, "roma_id": "fu", "dan_id": "u_dan", "gyo_id": "ha_gyo" },
  "kan_chichi": { "display_char": "父", "rarity": 3, "roma_id": "chichi", "dan_id": "i_dan", "gyo_id": "ta_gyo" },
  // 漢字: 母
  "kan_bo": { "display_char": "母", "rarity": 3, "roma_id": "bo", "dan_id": "o_dan", "gyo_id": "ba_gyo" },
  "kan_haha": { "display_char": "母", "rarity": 3, "roma_id": "haha", "dan_id": "a_dan", "gyo_id": "ha_gyo" },
  // 漢字: 友
  "kan_yuu2": { "display_char": "友", "rarity": 3, "roma_id": "yuu", "dan_id": "u_dan", "gyo_id": "ya_gyo" }, // 右(yuu)と競合
  "kan_tomo": { "display_char": "友", "rarity": 3, "roma_id": "tomo", "dan_id": "o_dan", "gyo_id": "ta_gyo" },
  // 漢字: 名
  "kan_mei": { "display_char": "名", "rarity": 3, "roma_id": "mei", "dan_id": "e_dan", "gyo_id": "ma_gyo" },
  "kan_myou": { "display_char": "名", "rarity": 3, "roma_id": "myou", "dan_id": "o_dan", "gyo_id": "ma_gyo" },
  "kan_na2": { "display_char": "名", "rarity": 3, "roma_id": "na", "dan_id": "a_dan", "gyo_id": "na_gyo" }, // 南(na)と競合
  // 漢字: 花
  "kan_ka4": { "display_char": "花", "rarity": 3, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 日(ka), 火(ka), 下(ka)と競合
  "kan_hana": { "display_char": "花", "rarity": 3, "roma_id": "hana", "dan_id": "a_dan", "gyo_id": "ha_gyo" },
  // 漢字: 林
  "kan_rin": { "display_char": "林", "rarity": 3, "roma_id": "rin", "dan_id": "i_dan", "gyo_id": "ra_gyo" },
  "kan_hayashi": { "display_char": "林", "rarity": 3, "roma_id": "hayashi", "dan_id": "i_dan", "gyo_id": "ha_gyo" },
  // 漢字: 森
  "kan_shin": { "display_char": "森", "rarity": 3, "roma_id": "shin", "dan_id": "i_dan", "gyo_id": "sa_gyo" },
  "kan_mori": { "display_char": "森", "rarity": 3, "roma_id": "mori", "dan_id": "o_dan", "gyo_id": "ma_gyo" },
  // 漢字: 村
  "kan_son": { "display_char": "村", "rarity": 3, "roma_id": "son", "dan_id": "o_dan", "gyo_id": "sa_gyo" },
  "kan_mura": { "display_char": "村", "rarity": 3, "roma_id": "mura", "dan_id": "u_dan", "gyo_id": "ma_gyo" },
  // 漢字: 町
  "kan_chou": { "display_char": "町", "rarity": 3, "roma_id": "chou", "dan_id": "o_dan", "gyo_id": "ta_gyo" },
  "kan_machi": { "display_char": "町", "rarity": 3, "roma_id": "machi", "dan_id": "a_dan", "gyo_id": "ma_gyo" },
  // 漢字: 石
  "kan_seki2": { "display_char": "石", "rarity": 3, "roma_id": "seki", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // 赤(seki)と競合
  "kan_shaku2": { "display_char": "石", "rarity": 3, "roma_id": "shaku", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // 赤(shaku)と競合
  "kan_koku": { "display_char": "石", "rarity": 3, "roma_id": "koku", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  "kan_ishi": { "display_char": "石", "rarity": 3, "roma_id": "ishi", "dan_id": "i_dan", "gyo_id": "a_gyo" },
  // 漢字: 犬
  "kan_ken2": { "display_char": "犬", "rarity": 3, "roma_id": "ken", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 剣(ken)用ID(設計書)
  "kan_inu": { "display_char": "犬", "rarity": 3, "roma_id": "inu", "dan_id": "u_dan", "gyo_id": "a_gyo" },
  // 漢字: 虫
  "kan_chuu2": { "display_char": "虫", "rarity": 3, "roma_id": "chuu", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // 中(chuu)と競合
  "kan_mushi": { "display_char": "虫", "rarity": 3, "roma_id": "mushi", "dan_id": "u_dan", "gyo_id": "ma_gyo" },
  // 漢字: 貝
  "kan_bai": { "display_char": "貝", "rarity": 3, "roma_id": "bai", "dan_id": "a_dan", "gyo_id": "ba_gyo" },
  "kan_kai": { "display_char": "貝", "rarity": 3, "roma_id": "kai", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 草
  "kan_sou": { "display_char": "草", "rarity": 3, "roma_id": "sou", "dan_id": "o_dan", "gyo_id": "sa_gyo" },
  "kan_kusa": { "display_char": "草", "rarity": 3, "roma_id": "kusa", "dan_id": "u_dan", "gyo_id": "ka_gyo" },
  // 漢字: 竹
  "kan_chiku": { "display_char": "竹", "rarity": 3, "roma_id": "chiku", "dan_id": "u_dan", "gyo_id": "ta_gyo" },
  "kan_take": { "display_char": "竹", "rarity": 3, "roma_id": "take", "dan_id": "e_dan", "gyo_id": "ta_gyo" },
  // 漢字: 音
  "kan_on": { "display_char": "音", "rarity": 3, "roma_id": "on", "dan_id": "o_dan", "gyo_id": "a_gyo" },
  "kan_in": { "display_char": "音", "rarity": 3, "roma_id": "in", "dan_id": "i_dan", "gyo_id": "a_gyo" },
  "kan_oto": { "display_char": "音", "rarity": 3, "roma_id": "oto", "dan_id": "o_dan", "gyo_id": "a_gyo" },
  "kan_ne": { "display_char": "音", "rarity": 3, "roma_id": "ne", "dan_id": "e_dan", "gyo_id": "na_gyo" },
  // 漢字: 車
  "kan_sha": { "display_char": "車", "rarity": 3, "roma_id": "sha", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  "kan_kuruma": { "display_char": "車", "rarity": 3, "roma_id": "kuruma", "dan_id": "u_dan", "gyo_id": "ka_gyo" },
  // 漢字: 本
  "kan_hon": { "display_char": "本", "rarity": 3, "roma_id": "hon", "dan_id": "o_dan", "gyo_id": "ha_gyo" },
  "kan_moto2": { "display_char": "本", "rarity": 3, "roma_id": "moto", "dan_id": "o_dan", "gyo_id": "ma_gyo" }, // 下(moto)と競合
  // 漢字: 文
  "kan_bun": { "display_char": "文", "rarity": 3, "roma_id": "bun", "dan_id": "u_dan", "gyo_id": "ba_gyo" },
  "kan_mon": { "display_char": "文", "rarity": 3, "roma_id": "mon", "dan_id": "o_dan", "gyo_id": "ma_gyo" },
  "kan_fumi": { "display_char": "文", "rarity": 3, "roma_id": "fumi", "dan_id": "u_dan", "gyo_id": "ha_gyo" },
  // 漢字: 字
  "kan_ji3": { "display_char": "字", "rarity": 3, "roma_id": "ji", "dan_id": "i_dan", "gyo_id": "za_gyo" }, // 十(ji), 耳(ji)と競合
  "kan_aza": { "display_char": "字", "rarity": 3, "roma_id": "aza", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  // 漢字: 書
  "kan_sho2": { "display_char": "書", "rarity": 3, "roma_id": "sho", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 生(shou), 上(shou), 青(shou) と競合
  "kan_ka5": { "display_char": "書", "rarity": 3, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 日, 火, 下, 花 と競合
  // 漢字: 正
  "kan_sei4": { "display_char": "正", "rarity": 3, "roma_id": "sei", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // 生, 西, 青 と競合
  "kan_shou4": { "display_char": "正", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 生, 上, 青, 書 と競合
  "kan_masa": { "display_char": "正", "rarity": 3, "roma_id": "masa", "dan_id": "a_dan", "gyo_id": "ma_gyo" },
  "kan_tada": { "display_char": "正", "rarity": 3, "roma_id": "tada", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  // 漢字: 出
  "kan_shutsu": { "display_char": "出", "rarity": 3, "roma_id": "shutsu", "dan_id": "u_dan", "gyo_id": "sa_gyo" },
  "kan_sui2": { "display_char": "出", "rarity": 3, "roma_id": "sui", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // 水(sui)と競合
  "kan_de": { "display_char": "出", "rarity": 3, "roma_id": "de", "dan_id": "e_dan", "gyo_id": "da_gyo" },
  "kan_da": { "display_char": "出", "rarity": 3, "roma_id": "da", "dan_id": "a_dan", "gyo_id": "da_gyo" },
  // 漢字: 入
  "kan_nyuu": { "display_char": "入", "rarity": 3, "roma_id": "nyuu", "dan_id": "u_dan", "gyo_id": "na_gyo" },
  "kan_iri": { "display_char": "入", "rarity": 3, "roma_id": "iri", "dan_id": "i_dan", "gyo_id": "a_gyo" },
  "kan_hai": { "display_char": "入", "rarity": 3, "roma_id": "hai", "dan_id": "a_dan", "gyo_id": "ha_gyo" },
  // 漢字: 立
  "kan_ritsu": { "display_char": "立", "rarity": 3, "roma_id": "ritsu", "dan_id": "i_dan", "gyo_id": "ra_gyo" },
  "kan_ryuu": { "display_char": "立", "rarity": 3, "roma_id": "ryuu", "dan_id": "u_dan", "gyo_id": "ra_gyo" }, // 竜(ryuu)用ID(設計書)
  "kan_ta4": { "display_char": "立", "rarity": 3, "roma_id": "ta", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // 田, 手, 足 と競合
  // 漢字: 休
  "kan_kyuu2": { "display_char": "休", "rarity": 3, "roma_id": "kyuu", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 九(kyuu)と競合
  "kan_yasu": { "display_char": "休", "rarity": 3, "roma_id": "yasu", "dan_id": "a_dan", "gyo_id": "ya_gyo" },
  // 漢字: 見
  "kan_ken3": { "display_char": "見", "rarity": 3, "roma_id": "ken", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 剣(ken), 犬(ken)と競合
  "kan_mi2": { "display_char": "見", "rarity": 3, "roma_id": "mi", "dan_id": "i_dan", "gyo_id": "ma_gyo" }, // 三(mi)と競合
  "kan_mi3": { "display_char": "見", "rarity": 3, "roma_id": "mi", "dan_id": "i_dan", "gyo_id": "ma_gyo" }, // 競合
  // --- 14. 漢字 (小学2年生・パート1/4) ---
  // Rarity: 3
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 引
  "kan_in2": { "display_char": "引", "rarity": 3, "roma_id": "in", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // 音(in)と競合
  "kan_hi3": { "display_char": "引", "rarity": 3, "roma_id": "hi", "dan_id": "i_dan", "gyo_id": "ha_gyo" }, // 日(hi), 火(hi)と競合
  // 漢字: 羽
  "kan_u4": { "display_char": "羽", "rarity": 3, "roma_id": "u", "dan_id": "u_dan", "gyo_id": "a_gyo" }, // 生(u), 右(u), 雨(u)と競合
  "kan_ha2": { "display_char": "羽", "rarity": 3, "roma_id": "ha", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // 生(ha)と競合
  "kan_wa": { "display_char": "羽", "rarity": 3, "roma_id": "wa", "dan_id": "a_dan", "gyo_id": "wa_gyo" },
  // 漢字: 雲
  "kan_un": { "display_char": "雲", "rarity": 3, "roma_id": "un", "dan_id": "u_dan", "gyo_id": "a_gyo" },
  "kan_kumo": { "display_char": "雲", "rarity": 3, "roma_id": "kumo", "dan_id": "u_dan", "gyo_id": "ka_gyo" },
  // 漢字: 園
  "kan_en2": { "display_char": "園", "rarity": 3, "roma_id": "en", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // 円(en)と競合
  "kan_sono": { "display_char": "園", "rarity": 3, "roma_id": "sono", "dan_id": "o_dan", "gyo_id": "sa_gyo" },
  // 漢字: 遠
  "kan_en3": { "display_char": "遠", "rarity": 3, "roma_id": "en", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // 円(en), 園(en)と競合
  "kan_on2": { "display_char": "遠", "rarity": 3, "roma_id": "on", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // 音(on)と競合
  "kan_too": { "display_char": "遠", "rarity": 3, "roma_id": "too", "dan_id": "o_dan", "gyo_id": "ta_gyo" },
  // 漢字: 何
  "kan_ka6": { "display_char": "何", "rarity": 3, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 日,火,下,花,書 と競合
  "kan_nani": { "display_char": "何", "rarity": 3, "roma_id": "nani", "dan_id": "a_dan", "gyo_id": "na_gyo" },
  "kan_nan3": { "display_char": "何", "rarity": 3, "roma_id": "nan", "dan_id": "a_dan", "gyo_id": "na_gyo" }, // 南(nan), 男(nan)と競合
  // 漢字: 科
  "kan_ka7": { "display_char": "科", "rarity": 3, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 夏
  "kan_ka8": { "display_char": "夏", "rarity": 3, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ge2": { "display_char": "夏", "rarity": 3, "roma_id": "ge", "dan_id": "e_dan", "gyo_id": "ga_gyo" }, // 下(ge)と競合
  "kan_natsu": { "display_char": "夏", "rarity": 3, "roma_id": "natsu", "dan_id": "a_dan", "gyo_id": "na_gyo" },
  // 漢字: 家
  "kan_ka9": { "display_char": "家", "rarity": 3, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ke2": { "display_char": "家", "rarity": 3, "roma_id": "ke", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 気(ke)と競合
  "kan_ie": { "display_char": "家", "rarity": 3, "roma_id": "ie", "dan_id": "e_dan", "gyo_id": "a_gyo" },
  "kan_ya2": { "display_char": "家", "rarity": 3, "roma_id": "ya", "dan_id": "a_dan", "gyo_id": "ya_gyo" }, // 八(ya)と競合
  // 漢字: 歌
  "kan_ka10": { "display_char": "歌", "rarity": 3, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_uta": { "display_char": "歌", "rarity": 3, "roma_id": "uta", "dan_id": "a_dan", "gyo_id": "u_gyo" }, //
  // 漢字: 画
  "kan_ga": { "display_char": "画", "rarity": 3, "roma_id": "ga", "dan_id": "a_dan", "gyo_id": "ga_gyo" },
  "kan_kaku": { "display_char": "画", "rarity": 3, "roma_id": "kaku", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 回
  "kan_kai2": { "display_char": "回", "rarity": 3, "roma_id": "kai", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 貝(kai)と競合
  "kan_e": { "display_char": "回", "rarity": 3, "roma_id": "e", "dan_id": "e_dan", "gyo_id": "a_gyo" },
  "kan_mawa": { "display_char": "回", "rarity": 3, "roma_id": "mawa", "dan_id": "a_dan", "gyo_id": "ma_gyo" },
  // 漢字: 会
  "kan_kai3": { "display_char": "会", "rarity": 3, "roma_id": "kai", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 貝(kai), 回(kai)と競合
  "kan_e2": { "display_char": "会", "rarity": 3, "roma_id": "e", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // 回(e)と競合
  "kan_a3": { "display_char": "会", "rarity": 3, "roma_id": "a", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // 上(a), 空(a)と競合
  // 漢字: 海
  "kan_kai4": { "display_char": "海", "rarity": 3, "roma_id": "kai", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_umi": { "display_char": "海", "rarity": 3, "roma_id": "umi", "dan_id": "u_dan", "gyo_id": "u_gyo" }, //
  // 漢字: 絵
  "kan_kai5": { "display_char": "絵", "rarity": 3, "roma_id": "kai", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_e3": { "display_char": "絵", "rarity": 3, "roma_id": "e", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // 回(e), 会(e)と競合
  // 漢字: 外
  "kan_gai": { "display_char": "外", "rarity": 3, "roma_id": "gai", "dan_id": "a_dan", "gyo_id": "ga_gyo" },
  "kan_ge3": { "display_char": "外", "rarity": 3, "roma_id": "ge", "dan_id": "e_dan", "gyo_id": "ga_gyo" }, // 下(ge), 夏(ge)と競合
  "kan_soto": { "display_char": "外", "rarity": 3, "roma_id": "soto", "dan_id": "o_dan", "gyo_id": "sa_gyo" },
  "kan_hoka": { "display_char": "外", "rarity": 3, "roma_id": "hoka", "dan_id": "o_dan", "gyo_id": "ha_gyo" },
  // 漢字: 角
  "kan_kaku2": { "display_char": "角", "rarity": 3, "roma_id": "kaku", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 画(kaku)と競合
  "kan_kado": { "display_char": "角", "rarity": 3, "roma_id": "kado", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  "kan_tsuno": { "display_char": "角", "rarity": 3, "roma_id": "tsuno", "dan_id": "u_dan", "gyo_id": "ta_gyo" },
  // 漢字: 楽
  "kan_gaku2": { "display_char": "楽", "rarity": 3, "roma_id": "gaku", "dan_id": "a_dan", "gyo_id": "ga_gyo" }, // 学(gaku)と競合
  "kan_raku": { "display_char": "楽", "rarity": 3, "roma_id": "raku", "dan_id": "a_dan", "gyo_id": "ra_gyo" },
  "kan_tano": { "display_char": "楽", "rarity": 3, "roma_id": "tano", "dan_id": "o_dan", "gyo_id": "ta_gyo" },
  // 漢字: 活
  "kan_katsu": { "display_char": "活", "rarity": 3, "roma_id": "katsu", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 間
  "kan_kan": { "display_char": "間", "rarity": 3, "roma_id": "kan", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  "kan_ken4": { "display_char": "間", "rarity": 3, "roma_id": "ken", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 剣(ken), 犬(ken), 見(ken)と競合
  "kan_aida": { "display_char": "間", "rarity": 3, "roma_id": "aida", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  "kan_ma3": { "display_char": "間", "rarity": 3, "roma_id": "ma", "dan_id": "a_dan", "gyo_id": "ma_gyo" }, // 目(ma2)と競合
  // 漢字: 丸
  "kan_gan": { "display_char": "丸", "rarity": 3, "roma_id": "gan", "dan_id": "a_dan", "gyo_id": "ga_gyo" },
  "kan_maru2": { "display_char": "丸", "rarity": 3, "roma_id": "maru", "dan_id": "a_dan", "gyo_id": "ma_gyo" }, // 円(maru)と競合
  // 漢字: 岩
  "kan_gan2": { "display_char": "岩", "rarity": 3, "roma_id": "gan", "dan_id": "a_dan", "gyo_id": "ga_gyo" }, // 丸(gan)と競合
  "kan_iwa": { "display_char": "岩", "rarity": 3, "roma_id": "iwa", "dan_id": "a_dan", "gyo_id": "i_gyo" }, //
  // 漢字: 顔
  "kan_gan3": { "display_char": "顔", "rarity": 3, "roma_id": "gan", "dan_id": "a_dan", "gyo_id": "ga_gyo" }, // 丸(gan), 岩(gan)と競合
  "kan_kao": { "display_char": "顔", "rarity": 3, "roma_id": "kao", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  // 漢字: 汽
  "kan_ki4": { "display_char": "汽", "rarity": 3, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // 生(ki), 木(ki), 気(ki)と競合
  // 漢字: 記
  "kan_ki5": { "display_char": "記", "rarity": 3, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_shiru": { "display_char": "記", "rarity": 3, "roma_id": "shiru", "dan_id": "i_dan", "gyo_id": "sa_gyo" },
  // 漢字: 帰
  "kan_ki6": { "display_char": "帰", "rarity": 3, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kae": { "display_char": "帰", "rarity": 3, "roma_id": "kae", "dan_id": "e_dan", "gyo_id": "ka_gyo" },
  // 漢字: 弓
  "kan_kyuu3": { "display_char": "弓", "rarity": 3, "roma_id": "kyuu", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 九(kyuu), 休(kyuu)と競合
  "kan_yumi": { "display_char": "弓", "rarity": 3, "roma_id": "yumi", "dan_id": "u_dan", "gyo_id": "ya_gyo" },
  // 漢字: 牛
  "kan_gyuu": { "display_char": "牛", "rarity": 3, "roma_id": "gyuu", "dan_id": "u_dan", "gyo_id": "ga_gyo" },
  "kan_ushi": { "display_char": "牛", "rarity": 3, "roma_id": "ushi", "dan_id": "u_dan", "gyo_id": "u_gyo" }, //
  // 漢字: 魚
  "kan_gyo": { "display_char": "魚", "rarity": 3, "roma_id": "gyo", "dan_id": "o_dan", "gyo_id": "ga_gyo" },
  "kan_uo": { "display_char": "魚", "rarity": 3, "roma_id": "uo", "dan_id": "o_dan", "gyo_id": "u_gyo" }, //
  "kan_sakana": { "display_char": "魚", "rarity": 3, "roma_id": "sakana", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  // 漢字: 京
  "kan_kyou2": { "display_char": "京", "rarity": 3, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 校(kyou)と競合
  "kan_kei": { "display_char": "京", "rarity": 3, "roma_id": "kei", "dan_id": "e_dan", "gyo_id": "ka_gyo" },
  // 漢字: 強
  "kan_kyou3": { "display_char": "強", "rarity": 3, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_gou": { "display_char": "強", "rarity": 3, "roma_id": "gou", "dan_id": "o_dan", "gyo_id": "ga_gyo" },
  "kan_tsuyo": { "display_char": "強", "rarity": 3, "roma_id": "tsuyo", "dan_id": "o_dan", "gyo_id": "ta_gyo" },
  // 漢字: 教
  "kan_kyou4": { "display_char": "教", "rarity": 3, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_oshi": { "display_char": "教", "rarity": 3, "roma_id": "oshi", "dan_id": "i_dan", "gyo_id": "o_gyo" }, //
  // 漢字: 近
  "kan_kin2": { "display_char": "近", "rarity": 3, "roma_id": "kin", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // 金(kin)と競合
  "kan_kon2": { "display_char": "近", "rarity": 3, "roma_id": "kon", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 金(kon)と競合
  "kan_chika": { "display_char": "近", "rarity": 3, "roma_id": "chika", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  // 漢字: 兄
  "kan_kei2": { "display_char": "兄", "rarity": 3, "roma_id": "kei", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 京(kei)と競合
  "kan_kyou5": { "display_char": "兄", "rarity": 3, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ani": { "display_char": "兄", "rarity": 3, "roma_id": "ani", "dan_id": "i_dan", "gyo_id": "a_gyo" },
  // 漢字: 形
  "kan_kei3": { "display_char": "形", "rarity": 3, "roma_id": "kei", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_gyou": { "display_char": "形", "rarity": 3, "roma_id": "gyou", "dan_id": "o_dan", "gyo_id": "ga_gyo" },
  "kan_kata": { "display_char": "形", "rarity": 3, "roma_id": "kata", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  "kan_katachi": { "display_char": "形", "rarity": 3, "roma_id": "katachi", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  // 漢字: 計
  "kan_kei4": { "display_char": "計", "rarity": 3, "roma_id": "kei", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_haka": { "display_char": "計", "rarity": 3, "roma_id": "haka", "dan_id": "a_dan", "gyo_id": "ha_gyo" },
  // 漢字: 元
  "kan_gen": { "display_char": "元", "rarity": 3, "roma_id": "gen", "dan_id": "e_dan", "gyo_id": "ga_gyo" },
  "kan_gan4": { "display_char": "元", "rarity": 3, "roma_id": "gan", "dan_id": "a_dan", "gyo_id": "ga_gyo" }, // 丸, 岩, 顔 と競合
  "kan_moto3": { "display_char": "元", "rarity": 3, "roma_id": "moto", "dan_id": "o_dan", "gyo_id": "ma_gyo" }, // 下(moto), 本(moto)と競合
  // 漢字: 言
  "kan_gen2": { "display_char": "言", "rarity": 3, "roma_id": "gen", "dan_id": "e_dan", "gyo_id": "ga_gyo" }, // 元(gen)と競合
  "kan_gon": { "display_char": "言", "rarity": 3, "roma_id": "gon", "dan_id": "o_dan", "gyo_id": "ga_gyo" },
  "kan_i2": { "display_char": "言", "rarity": 3, "roma_id": "i", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // 生(i)と競合
  "kan_koto": { "display_char": "言", "rarity": 3, "roma_id": "koto", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  // 漢字: 原
  "kan_gen3": { "display_char": "原", "rarity": 3, "roma_id": "gen", "dan_id": "e_dan", "gyo_id": "ga_gyo" }, // 元(gen), 言(gen)と競合
  "kan_hara": { "display_char": "原", "rarity": 3, "roma_id": "hara", "dan_id": "a_dan", "gyo_id": "ha_gyo" },
  // 漢字: 戸
  "kan_ko3": { "display_char": "戸", "rarity": 3, "roma_id": "ko", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 子(ko), 木(ko)と競合
  "kan_to3": { "display_char": "戸", "rarity": 3, "roma_id": "to", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // 十(to), 土(to)と競合

  // --- 14. 漢字 (小学2年生・パート2/4) ---
  // Rarity: 3
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 古
  "kan_ko4": { "display_char": "古", "rarity": 3, "roma_id": "ko", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 子, 木, 戸 と競合
  "kan_furu": { "display_char": "古", "rarity": 3, "roma_id": "furu", "dan_id": "u_dan", "gyo_id": "ha_gyo" },
  // 漢字: 午
  "kan_go2": { "display_char": "午", "rarity": 3, "roma_id": "go", "dan_id": "o_dan", "gyo_id": "ga_gyo" }, // 五(go)と競合
  "kan_uma": { "display_char": "午", "rarity": 3, "roma_id": "uma", "dan_id": "a_dan", "gyo_id": "u_gyo" }, //
  // 漢字: 後
  "kan_go3": { "display_char": "後", "rarity": 3, "roma_id": "go", "dan_id": "o_dan", "gyo_id": "ga_gyo" }, // 五(go), 午(go)と競合
  "kan_kou3": { "display_char": "後", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 校(kou), 口(kou)と競合
  "kan_nochi": { "display_char": "後", "rarity": 3, "roma_id": "nochi", "dan_id": "i_dan", "gyo_id": "na_gyo" },
  "kan_ushiro": { "display_char": "後", "rarity": 3, "roma_id": "ushiro", "dan_id": "o_dan", "gyo_id": "u_gyo" }, //
  "kan_ato": { "display_char": "後", "rarity": 3, "roma_id": "ato", "dan_id": "o_dan", "gyo_id": "a_gyo" },
  "kan_oku": { "display_char": "後", "rarity": 3, "roma_id": "oku", "dan_id": "u_dan", "gyo_id": "o_gyo" }, //
  // 漢字: 語
  "kan_go4": { "display_char": "語", "rarity": 3, "roma_id": "go", "dan_id": "o_dan", "gyo_id": "ga_gyo" }, // ...競合
  "kan_kata": { "display_char": "語", "rarity": 3, "roma_id": "kata", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 工
  "kan_kou4": { "display_char": "工", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ku3": { "display_char": "工", "rarity": 3, "roma_id": "ku", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 九(ku), 口(ku)と競合
  // 漢字: 公
  "kan_kou5": { "display_char": "公", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ku4": { "display_char": "公", "rarity": 3, "roma_id": "ku", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ooyake": { "display_char": "公", "rarity": 3, "roma_id": "ooyake", "dan_id": "e_dan", "gyo_id": "o_gyo" }, //
  // 漢字: 広
  "kan_kou6": { "display_char": "広", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_hiro": { "display_char": "広", "rarity": 3, "roma_id": "hiro", "dan_id": "o_dan", "gyo_id": "ha_gyo" },
  // 漢字: 交
  "kan_kou7": { "display_char": "交", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_maji": { "display_char": "交", "rarity": 3, "roma_id": "maji", "dan_id": "i_dan", "gyo_id": "ma_gyo" },
  "kan_maza": { "display_char": "交", "rarity": 3, "roma_id": "maza", "dan_id": "a_dan", "gyo_id": "ma_gyo" },
  "kan_kawa2": { "display_char": "交", "rarity": 3, "roma_id": "kawa", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 川(kawa)と競合
  // 漢字: 光
  "kan_kou8": { "display_char": "光", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_hikari": { "display_char": "光", "rarity": 3, "roma_id": "hikari", "dan_id": "i_dan", "gyo_id": "ha_gyo" },
  "kan_hika": { "display_char": "光", "rarity": 3, "roma_id": "hika", "dan_id": "a_dan", "gyo_id": "ha_gyo" },
  // 漢字: 考
  "kan_kou9": { "display_char": "考", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kanga": { "display_char": "考", "rarity": 3, "roma_id": "kanga", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 行
  "kan_kou10": { "display_char": "行", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_gyou2": { "display_char": "行", "rarity": 3, "roma_id": "gyou", "dan_id": "o_dan", "gyo_id": "ga_gyo" }, // 形(gyou)と競合
  "kan_an": { "display_char": "行", "rarity": 3, "roma_id": "an", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  "kan_i3": { "display_char": "行", "rarity": 3, "roma_id": "i", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // 生(i), 言(i)と競合
  "kan_yu3": { "display_char": "行", "rarity": 3, "roma_id": "yu", "dan_id": "u_dan", "gyo_id": "ya_gyo" },
  "kan_o": { "display_char": "行", "rarity": 3, "roma_id": "o", "dan_id": "o_dan", "gyo_id": "a_gyo" },
  // 漢字: 高
  "kan_kou11": { "display_char": "高", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_taka": { "display_char": "高", "rarity": 3, "roma_id": "taka", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  // 漢字: 黄
  "kan_kou12": { "display_char": "黄", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ou2": { "display_char": "黄", "rarity": 3, "roma_id": "ou", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // 王(ou)と競合
  "kan_ki7": { "display_char": "黄", "rarity": 3, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ko3": { "display_char": "黄", "rarity": 3, "roma_id": "ko", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 子, 木, 戸, 古 と競合
  // 漢字: 合
  "kan_gou2": { "display_char": "合", "rarity": 3, "roma_id": "gou", "dan_id": "o_dan", "gyo_id": "ga_gyo" }, // 強(gou)と競合
  "kan_gatsu2": { "display_char": "合", "rarity": 3, "roma_id": "gatsu", "dan_id": "a_dan", "gyo_id": "ga_gyo" }, // 月(gatsu)と競合
  "kan_katsu2": { "display_char": "合", "rarity": 3, "roma_id": "katsu", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 活(katsu)と競合
  "kan_a4": { "display_char": "合", "rarity": 3, "roma_id": "a", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // 上, 空, 会 と競合
  // 漢字: 谷
  "kan_koku2": { "display_char": "谷", "rarity": 3, "roma_id": "koku", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 石(koku)と競合
  "kan_tani": { "display_char": "谷", "rarity": 3, "roma_id": "tani", "dan_id": "i_dan", "gyo_id": "ta_gyo" },
  "kan_kiwama": { "display_char": "谷", "rarity": 3, "roma_id": "kiwama", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 国
  "kan_koku3": { "display_char": "国", "rarity": 3, "roma_id": "koku", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 石(koku), 谷(koku)と競合
  "kan_kuni": { "display_char": "国", "rarity": 3, "roma_id": "kuni", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  // 漢字: 黒
  "kan_koku4": { "display_char": "黒", "rarity": 3, "roma_id": "koku", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kuro": { "display_char": "黒", "rarity": 3, "roma_id": "kuro", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  // 漢字: 今
  "kan_kon3": { "display_char": "今", "rarity": 3, "roma_id": "kon", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 金(kon), 近(kon)と競合
  "kan_kin3": { "display_char": "今", "rarity": 3, "roma_id": "kin", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // 金(kin), 近(kin)と競合
  "kan_ima": { "display_char": "今", "rarity": 3, "roma_id": "ima", "dan_id": "a_dan", "gyo_id": "i_gyo" }, //
  // 漢字: 才
  "kan_sai2": { "display_char": "才", "rarity": 3, "roma_id": "sai", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // 西(sai)と競合
  // 漢字: 細
  "kan_sai3": { "display_char": "細", "rarity": 3, "roma_id": "sai", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // 西(sai), 才(sai)と競合
  "kan_hoso": { "display_char": "細", "rarity": 3, "roma_id": "hoso", "dan_id": "o_dan", "gyo_id": "ha_gyo" },
  "kan_koma": { "display_char": "細", "rarity": 3, "roma_id": "koma", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 作
  "kan_saku": { "display_char": "作", "rarity": 3, "roma_id": "saku", "dan_id": "u_dan", "gyo_id": "sa_gyo" },
  "kan_sa3": { "display_char": "作", "rarity": 3, "roma_id": "sa", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // 下(sa), 左(sa)と競合
  "kan_tsuku": { "display_char": "作", "rarity": 3, "roma_id": "tsuku", "dan_id": "u_dan", "gyo_id": "ta_gyo" },
  // 漢字: 算
  "kan_san3": { "display_char": "算", "rarity": 3, "roma_id": "san", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // 三(san), 山(san)と競合
  "kan_soro": { "display_char": "算", "rarity": 3, "roma_id": "soro", "dan_id": "o_dan", "gyo_id": "sa_gyo" },
  // 漢字: 止
  "kan_shi3": { "display_char": "止", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // 四(shi), 子(shi)と競合
  "kan_to4": { "display_char": "止", "rarity": 3, "roma_id": "to", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // 十(to), 土(to), 戸(to)と競合
  "kan_ya3": { "display_char": "止", "rarity": 3, "roma_id": "ya", "dan_id": "a_dan", "gyo_id": "ya_gyo" }, // 八(ya), 家(ya)と競合
  // 漢字: 市
  "kan_shi4": { "display_char": "市", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_ichi2": { "display_char": "市", "rarity": 3, "roma_id": "ichi", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // 一(ichi)と競合
  // 漢字: 矢
  "kan_shi5": { "display_char": "矢", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_ya4": { "display_char": "矢", "rarity": 3, "roma_id": "ya", "dan_id": "a_dan", "gyo_id": "ya_gyo" }, // ...競合
  // 漢字: 姉
  "kan_shi6": { "display_char": "姉", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_ane": { "display_char": "姉", "rarity": 3, "roma_id": "ane", "dan_id": "e_dan", "gyo_id": "a_gyo" },
  // 漢字: 思
  "kan_shi7": { "display_char": "思", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_omo": { "display_char": "思", "rarity": 3, "roma_id": "omo", "dan_id": "o_dan", "gyo_id": "o_gyo" }, //
  // 漢字: 紙
  "kan_shi8": { "display_char": "紙", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_kami2": { "display_char": "紙", "rarity": 3, "roma_id": "kami", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 上(kami)と競合
  // 漢字: 寺
  "kan_ji4": { "display_char": "寺", "rarity": 3, "roma_id": "ji", "dan_id": "i_dan", "gyo_id": "za_gyo" }, // 十(ji), 耳(ji), 字(ji)と競合
  "kan_tera": { "display_char": "寺", "rarity": 3, "roma_id": "tera", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  // 漢字: 自
  "kan_ji5": { "display_char": "自", "rarity": 3, "roma_id": "ji", "dan_id": "i_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_shi9": { "display_char": "自", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_mizuka": { "display_char": "自", "rarity": 3, "roma_id": "mizuka", "dan_id": "a_dan", "gyo_id": "ma_gyo" },
  // 漢字: 時
  "kan_ji6": { "display_char": "時", "rarity": 3, "roma_id": "ji", "dan_id": "i_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_toki": { "display_char": "時", "rarity": 3, "roma_id": "toki", "dan_id": "i_dan", "gyo_id": "ta_gyo" },
  // 漢字: 室
  "kan_shitsu": { "display_char": "室", "rarity": 3, "roma_id": "shitsu", "dan_id": "i_dan", "gyo_id": "sa_gyo" },
  "kan_muro": { "display_char": "室", "rarity": 3, "roma_id": "muro", "dan_id": "o_dan", "gyo_id": "ma_gyo" },
  // 漢字: 社
  "kan_sha2": { "display_char": "社", "rarity": 3, "roma_id": "sha", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // 車(sha)と競合
  "kan_yashiro": { "display_char": "社", "rarity": 3, "roma_id": "yashiro", "dan_id": "o_dan", "gyo_id": "ya_gyo" },
  // 漢字: 弱
  "kan_jaku": { "display_char": "弱", "rarity": 3, "roma_id": "jaku", "dan_id": "a_dan", "gyo_id": "za_gyo" },
  "kan_yowa": { "display_char": "弱", "rarity": 3, "roma_id": "yowa", "dan_id": "a_dan", "gyo_id": "ya_gyo" },
  // 漢字: 首
  "kan_shu2": { "display_char": "首", "rarity": 3, "roma_id": "shu", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // 手(shu)と競合
  "kan_kubi": { "display_char": "首", "rarity": 3, "roma_id": "kubi", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  // 漢字: 秋
  "kan_shuu": { "display_char": "秋", "rarity": 3, "roma_id": "shuu", "dan_id": "u_dan", "gyo_id": "sa_gyo" },
  "kan_aki": { "display_char": "秋", "rarity": 3, "roma_id": "aki", "dan_id": "i_dan", "gyo_id": "a_gyo" },
  // 漢字: 週
  "kan_shuu2": { "display_char": "週", "rarity": 3, "roma_id": "shuu", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // 秋(shuu)と競合

  // --- 14. 漢字 (小学2年生・パート3/4) ---
  // Rarity: 3
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 春
  "kan_shun": { "display_char": "春", "rarity": 3, "roma_id": "shun", "dan_id": "u_dan", "gyo_id": "sa_gyo" },
  "kan_haru": { "display_char": "春", "rarity": 3, "roma_id": "haru", "dan_id": "u_dan", "gyo_id": "ha_gyo" },
  // 漢字: 書
  "kan_sho3": { "display_char": "書", "rarity": 3, "roma_id": "sho", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 生,上,青,正 と競合
  "kan_ka": { "display_char": "書", "rarity": 3, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 多くの競合あり
  // 漢字: 少
  "kan_shou5": { "display_char": "少", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_suko": { "display_char": "少", "rarity": 3, "roma_id": "suko", "dan_id": "o_dan", "gyo_id": "sa_gyo" },
  "kan_suku": { "display_char": "少", "rarity": 3, "roma_id": "suku", "dan_id": "u_dan", "gyo_id": "sa_gyo" },
  // 漢字: 場
  "kan_jou2": { "display_char": "場", "rarity": 3, "roma_id": "jou", "dan_id": "o_dan", "gyo_id": "za_gyo" }, // 上(jou)と競合
  "kan_ba": { "display_char": "場", "rarity": 3, "roma_id": "ba", "dan_id": "a_dan", "gyo_id": "ba_gyo" },
  // 漢字: 色
  "kan_shoku": { "display_char": "色", "rarity": 3, "roma_id": "shoku", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 食(shoku)用ID(設計書)
  "kan_shiki": { "display_char": "色", "rarity": 3, "roma_id": "shiki", "dan_id": "i_dan", "gyo_id": "sa_gyo" },
  "kan_iro": { "display_char": "色", "rarity": 3, "roma_id": "iro", "dan_id": "o_dan", "gyo_id": "i_gyo" }, //
  // 漢字: 食
  "kan_shoku2": { "display_char": "食", "rarity": 3, "roma_id": "shoku", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 色(shoku)と競合
  "kan_jiki": { "display_char": "食", "rarity": 3, "roma_id": "jiki", "dan_id": "i_dan", "gyo_id": "za_gyo" },
  "kan_ku5": { "display_char": "食", "rarity": 3, "roma_id": "ku", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ta5": { "display_char": "食", "rarity": 3, "roma_id": "ta", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // ...競合
  // 漢字: 心
  "kan_shin2": { "display_char": "心", "rarity": 3, "roma_id": "shin", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // 森(shin)と競合
  "kan_kokoro": { "display_char": "心", "rarity": 3, "roma_id": "kokoro", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  // 漢字: 新
  "kan_shin3": { "display_char": "新", "rarity": 3, "roma_id": "shin", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_atara": { "display_char": "新", "rarity": 3, "roma_id": "atara", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  "kan_ara": { "display_char": "新", "rarity": 3, "roma_id": "ara", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  "kan_nii": { "display_char": "新", "rarity": 3, "roma_id": "nii", "dan_id": "i_dan", "gyo_id": "na_gyo" },
  // 漢字: 親
  "kan_shin4": { "display_char": "親", "rarity": 3, "roma_id": "shin", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_oya": { "display_char": "親", "rarity": 3, "roma_id": "oya", "dan_id": "a_dan", "gyo_id": "o_gyo" }, //
  "kan_shita2": { "display_char": "親", "rarity": 3, "roma_id": "shita", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // 下(shita)と競合
  // 漢字: 図
  "kan_zu2": { "display_char": "図", "rarity": 3, "roma_id": "zu", "dan_id": "u_dan", "gyo_id": "za_gyo" }, // 手(zu)と競合
  "kan_to5": { "display_char": "図", "rarity": 3, "roma_id": "to", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_haka2": { "display_char": "図", "rarity": 3, "roma_id": "haka", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // 計(haka)と競合
  // 漢字: 数
  "kan_suu": { "display_char": "数", "rarity": 3, "roma_id": "suu", "dan_id": "u_dan", "gyo_id": "sa_gyo" },
  "kan_su2": { "display_char": "数", "rarity": 3, "roma_id": "su", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // 子(su)と競合
  "kan_kazu": { "display_char": "数", "rarity": 3, "roma_id": "kazu", "dan_id": "u_dan", "gyo_id": "ka_gyo" },
  "kan_kazo": { "display_char": "数", "rarity": 3, "roma_id": "kazo", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  // 漢字: 西
  // (小学1年生で既に出力済み)
  // 漢字: 声
  "kan_sei5": { "display_char": "声", "rarity": 3, "roma_id": "sei", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_shou6": { "display_char": "声", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_koe": { "display_char": "声", "rarity": 3, "roma_id": "koe", "dan_id": "e_dan", "gyo_id": "ka_gyo" },
  // 漢字: 星
  "kan_sei6": { "display_char": "星", "rarity": 3, "roma_id": "sei", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_shou7": { "display_char": "星", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_hoshi": { "display_char": "星", "rarity": 3, "roma_id": "hoshi", "dan_id": "i_dan", "gyo_id": "ha_gyo" },
  // 漢字: 晴
  "kan_sei7": { "display_char": "晴", "rarity": 3, "roma_id": "sei", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_ha4": { "display_char": "晴", "rarity": 3, "roma_id": "ha", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // 生(ha), 羽(ha)と競合
  // 漢字: 切
  "kan_setsu": { "display_char": "切", "rarity": 3, "roma_id": "setsu", "dan_id": "e_dan", "gyo_id": "sa_gyo" },
  "kan_sai4": { "display_char": "切", "rarity": 3, "roma_id": "sai", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // 西, 才, 細 と競合
  "kan_ki8": { "display_char": "切", "rarity": 3, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 雪
  "kan_setsu2": { "display_char": "雪", "rarity": 3, "roma_id": "setsu", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // 切(setsu)と競合
  "kan_yuki": { "display_char": "雪", "rarity": 3, "roma_id": "yuki", "dan_id": "i_dan", "gyo_id": "ya_gyo" },
  // 漢字: 船
  "kan_sen4": { "display_char": "船", "rarity": 3, "roma_id": "sen", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // 千, 先, 川 と競合
  "kan_fune": { "display_char": "船", "rarity": 3, "roma_id": "fune", "dan_id": "e_dan", "gyo_id": "ha_gyo" },
  "kan_funa": { "display_char": "船", "rarity": 3, "roma_id": "funa", "dan_id": "a_dan", "gyo_id": "ha_gyo" },
  // 漢字: 線
  "kan_sen5": { "display_char": "線", "rarity": 3, "roma_id": "sen", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  // 漢字: 前
  "kan_zen": { "display_char": "前", "rarity": 3, "roma_id": "zen", "dan_id": "e_dan", "gyo_id": "za_gyo" },
  "kan_mae": { "display_char": "前", "rarity": 3, "roma_id": "mae", "dan_id": "e_dan", "gyo_id": "ma_gyo" },
  // 漢字: 組
  "kan_so": { "display_char": "組", "rarity": 3, "roma_id": "so", "dan_id": "o_dan", "gyo_id": "sa_gyo" },
  "kan_kumi": { "display_char": "組", "rarity": 3, "roma_id": "kumi", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  "kan_gumi": { "display_char": "組", "rarity": 3, "roma_id": "gumi", "dan_id": "i_dan", "gyo_id": "ga_gyo" },
  // 漢字: 走
  "kan_sou2": { "display_char": "走", "rarity": 3, "roma_id": "sou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 草(sou)と競合
  "kan_hashi": { "display_char": "走", "rarity": 3, "roma_id": "hashi", "dan_id": "i_dan", "gyo_id": "ha_gyo" },
  // 漢字: 多
  "kan_ta6": { "display_char": "多", "rarity": 3, "roma_id": "ta", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_oo": { "display_char": "多", "rarity": 3, "roma_id": "oo", "dan_id": "o_dan", "gyo_id": "o_gyo" }, //
  // 漢字: 太
  "kan_tai": { "display_char": "太", "rarity": 3, "roma_id": "tai", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  "kan_ta7": { "display_char": "太", "rarity": 3, "roma_id": "ta", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_futo": { "display_char": "太", "rarity": 3, "roma_id": "futo", "dan_id": "o_dan", "gyo_id": "ha_gyo" },
  // 漢字: 体
  "kan_tai2": { "display_char": "体", "rarity": 3, "roma_id": "tai", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // 太(tai)と競合
  "kan_tei": { "display_char": "体", "rarity": 3, "roma_id": "tei", "dan_id": "e_dan", "gyo_id": "ta_gyo" },
  "kan_karada": { "display_char": "体", "rarity": 3, "roma_id": "karada", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 台
  "kan_dai": { "display_char": "台", "rarity": 3, "roma_id": "dai", "dan_id": "a_dan", "gyo_id": "da_gyo" },
  "kan_tai3": { "display_char": "台", "rarity": 3, "roma_id": "tai", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // 太(tai), 体(tai)と競合
  // 漢字: 地
  "kan_chi2": { "display_char": "地", "rarity": 3, "roma_id": "chi", "dan_id": "i_dan", "gyo_id": "ta_gyo" }, // 千(chi)と競合
  "kan_ji7": { "display_char": "地", "rarity": 3, "roma_id": "ji", "dan_id": "i_dan", "gyo_id": "za_gyo" }, // ...競合
  // 漢字: 池
  "kan_chi3": { "display_char": "池", "rarity": 3, "roma_id": "chi", "dan_id": "i_dan", "gyo_id": "ta_gyo" }, // 千(chi), 地(chi)と競合
  "kan_ike": { "display_char": "池", "rarity": 3, "roma_id": "ike", "dan_id": "e_dan", "gyo_id": "i_gyo" }, //
  // 漢字: 知
  "kan_chi4": { "display_char": "知", "rarity": 3, "roma_id": "chi", "dan_id": "i_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_shi": { "display_char": "知", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // 競合
  // 漢字: 茶
  "kan_cha": { "display_char": "茶", "rarity": 3, "roma_id": "cha", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  "kan_sa4": { "display_char": "茶", "rarity": 3, "roma_id": "sa", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // 下, 左, 作 と競合
  // 漢字: 昼
  "kan_chuu3": { "display_char": "昼", "rarity": 3, "roma_id": "chuu", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // 中(chuu), 虫(chuu)と競合
  "kan_hiru": { "display_char": "昼", "rarity": 3, "roma_id": "hiru", "dan_id": "u_dan", "gyo_id": "ha_gyo" },
  // 漢字: 長
  "kan_chou2": { "display_char": "長", "rarity": 3, "roma_id": "chou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // 町(chou)と競合
  "kan_naga": { "display_char": "長", "rarity": 3, "roma_id": "naga", "dan_id": "a_dan", "gyo_id": "na_gyo" },
  // 漢字: 鳥
  "kan_chou3": { "display_char": "鳥", "rarity": 3, "roma_id": "chou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // 町(chou), 長(chou)と競合
  "kan_tori": { "display_char": "鳥", "rarity": 3, "roma_id": "tori", "dan_id": "i_dan", "gyo_id": "ta_gyo" },
  // 漢字: 朝
  "kan_chou4": { "display_char": "朝", "rarity": 3, "roma_id": "chou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_asa": { "display_char": "朝", "rarity": 3, "roma_id": "asa", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  // 漢字: 直
  "kan_choku": { "display_char": "直", "rarity": 3, "roma_id": "choku", "dan_id": "o_dan", "gyo_id": "ta_gyo" },
  "kan_jiki2": { "display_char": "直", "rarity": 3, "roma_id": "jiki", "dan_id": "i_dan", "gyo_id": "za_gyo" }, // 食(jiki)と競合
  "kan_nao": { "display_char": "直", "rarity": 3, "roma_id": "nao", "dan_id": "o_dan", "gyo_id": "na_gyo" },
  "kan_tada2": { "display_char": "直", "rarity": 3, "roma_id": "tada", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // 正(tada)と競合
  // 漢字: 通
  "kan_tsuu": { "display_char": "通", "rarity": 3, "roma_id": "tsuu", "dan_id": "u_dan", "gyo_id": "ta_gyo" },
  "kan_tsu": { "display_char": "通", "rarity": 3, "roma_id": "tsu", "dan_id": "u_dan", "gyo_id": "ta_gyo" },
  "kan_too2": { "display_char": "通", "rarity": 3, "roma_id": "too", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // 遠(too)と競合
  "kan_kayo": { "display_char": "通", "rarity": 3, "roma_id": "kayo", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  // 漢字: 弟
  "kan_tei2": { "display_char": "弟", "rarity": 3, "roma_id": "tei", "dan_id": "e_dan", "gyo_id": "ta_gyo" }, // 体(tei)と競合
  "kan_dai2": { "display_char": "弟", "rarity": 3, "roma_id": "dai", "dan_id": "a_dan", "gyo_id": "da_gyo" }, // 台(dai)と競合
  "kan_otouto": { "display_char": "弟", "rarity": 3, "roma_id": "otouto", "dan_id": "o_dan", "gyo_id": "o_gyo" }, //
  // 漢字: 店
  "kan_ten2": { "display_char": "店", "rarity": 3, "roma_id": "ten", "dan_id": "e_dan", "gyo_id": "ta_gyo" }, // 天(ten)と競合
  "kan_mise": { "display_char": "店", "rarity": 3, "roma_id": "mise", "dan_id": "e_dan", "gyo_id": "ma_gyo" },

  // --- 14. 漢字 (小学2年生・パート4/4) ---
  // Rarity: 3
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 点
  "kan_ten3": { "display_char": "点", "rarity": 3, "roma_id": "ten", "dan_id": "e_dan", "gyo_id": "ta_gyo" }, // 天(ten), 店(ten)と競合
  "kan_bochi": { "display_char": "点", "rarity": 3, "roma_id": "bochi", "dan_id": "i_dan", "gyo_id": "ba_gyo" },
  // 漢字: 電
  "kan_den2": { "display_char": "電", "rarity": 3, "roma_id": "den", "dan_id": "e_dan", "gyo_id": "da_gyo" }, // 田(den)と競合
  // 漢字: 刀
  "kan_tou3": { "display_char": "刀", "rarity": 3, "roma_id": "tou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // 十(tou), 東(tou)と競合
  "kan_katana": { "display_char": "刀", "rarity": 3, "roma_id": "katana", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 冬
  "kan_tou4": { "display_char": "冬", "rarity": 3, "roma_id": "tou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_fuyu": { "display_char": "冬", "rarity": 3, "roma_id": "fuyu", "dan_id": "u_dan", "gyo_id": "ha_gyo" },
  // 漢字: 当
  "kan_tou5": { "display_char": "当", "rarity": 3, "roma_id": "tou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_a5": { "display_char": "当", "rarity": 3, "roma_id": "a", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // 上, 空, 会, 合 と競合
  // 漢字: 東
  // (小学1年生で既に出力済み)
  // 漢字: 答
  "kan_tou6": { "display_char": "答", "rarity": 3, "roma_id": "tou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_kotae": { "display_char": "答", "rarity": 3, "roma_id": "kotae", "dan_id": "e_dan", "gyo_id": "ka_gyo" },
  // 漢字: 頭
  "kan_tou7": { "display_char": "頭", "rarity": 3, "roma_id": "tou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_zu3": { "display_char": "頭", "rarity": 3, "roma_id": "zu", "dan_id": "u_dan", "gyo_id": "za_gyo" }, // 手(zu), 図(zu)と競合
  "kan_atama": { "display_char": "頭", "rarity": 3, "roma_id": "atama", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  "kan_kashira": { "display_char": "頭", "rarity": 3, "roma_id": "kashira", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 同
  "kan_dou": { "display_char": "同", "rarity": 3, "roma_id": "dou", "dan_id": "o_dan", "gyo_id": "da_gyo" },
  "kan_onaji": { "display_char": "同", "rarity": 3, "roma_id": "onaji", "dan_id": "i_dan", "gyo_id": "o_gyo" }, //
  // 漢字: 道
  "kan_dou2": { "display_char": "道", "rarity": 3, "roma_id": "dou", "dan_id": "o_dan", "gyo_id": "da_gyo" }, // 同(dou)と競合
  "kan_tou8": { "display_char": "道", "rarity": 3, "roma_id": "tou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_michi": { "display_char": "道", "rarity": 3, "roma_id": "michi", "dan_id": "i_dan", "gyo_id": "ma_gyo" },
  // 漢字: 読
  "kan_doku": { "display_char": "読", "rarity": 3, "roma_id": "doku", "dan_id": "u_dan", "gyo_id": "da_gyo" },
  "kan_toku": { "display_char": "読", "rarity": 3, "roma_id": "toku", "dan_id": "u_dan", "gyo_id": "ta_gyo" },
  "kan_tou9": { "display_char": "読", "rarity": 3, "roma_id": "tou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_yo4": { "display_char": "読", "rarity": 3, "roma_id": "yo", "dan_id": "o_dan", "gyo_id": "ya_gyo" }, // 四(yo)と競合
  // 漢字: 内
  "kan_nai": { "display_char": "内", "rarity": 3, "roma_id": "nai", "dan_id": "a_dan", "gyo_id": "na_gyo" },
  "kan_dai3": { "display_char": "内", "rarity": 3, "roma_id": "dai", "dan_id": "a_dan", "gyo_id": "da_gyo" }, // 台(dai), 弟(dai)と競合
  "kan_uchi2": { "display_char": "内", "rarity": 3, "roma_id": "uchi", "dan_id": "u_dan", "gyo_id": "a_gyo" }, // 中(uchi)と競合
  // 漢字: 南
  // (小学1年生で既に出力済み)
  // 漢字: 肉
  "kan_niku": { "display_char": "肉", "rarity": 3, "roma_id": "niku", "dan_id": "u_dan", "gyo_id": "na_gyo" },
  // 漢字: 馬
  "kan_ba2": { "display_char": "馬", "rarity": 3, "roma_id": "ba", "dan_id": "a_dan", "gyo_id": "ba_gyo" }, // 場(ba)と競合
  "kan_uma2": { "display_char": "馬", "rarity": 3, "roma_id": "uma", "dan_id": "a_dan", "gyo_id": "u_gyo" }, // 午(uma)と競合
  "kan_ma4": { "display_char": "馬", "rarity": 3, "roma_id": "ma", "dan_id": "a_dan", "gyo_id": "ma_gyo" }, // 目(ma), 間(ma)と競合
  // 漢字: 売
  "kan_bai2": { "display_char": "売", "rarity": 3, "roma_id": "bai", "dan_id": "a_dan", "gyo_id": "ba_gyo" }, // 貝(bai)と競合
  "kan_u5": { "display_char": "売", "rarity": 3, "roma_id": "u", "dan_id": "u_dan", "gyo_id": "a_gyo" }, // 生, 右, 雨, 羽 と競合
  // 漢字: 買
  "kan_bai3": { "display_char": "買", "rarity": 3, "roma_id": "bai", "dan_id": "a_dan", "gyo_id": "ba_gyo" }, // 貝(bai), 売(bai)と競合
  "kan_ka11": { "display_char": "買", "rarity": 3, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 麦
  "kan_baku": { "display_char": "麦", "rarity": 3, "roma_id": "baku", "dan_id": "u_dan", "gyo_id": "ba_gyo" },
  "kan_mugi": { "display_char": "麦", "rarity": 3, "roma_id": "mugi", "dan_id": "i_dan", "gyo_id": "ma_gyo" },
  // 漢字: 半
  "kan_han": { "display_char": "半", "rarity": 3, "roma_id": "han", "dan_id": "a_dan", "gyo_id": "ha_gyo" },
  "kan_naka2": { "display_char": "半", "rarity": 3, "roma_id": "naka", "dan_id": "a_dan", "gyo_id": "na_gyo" }, // 中(naka)と競合
  // 漢字: 番
  "kan_ban2": { "display_char": "番", "rarity": 3, "roma_id": "ban", "dan_id": "a_dan", "gyo_id": "ba_gyo" }, // 万(ban)と競合
  "kan_tsugai": { "display_char": "番", "rarity": 3, "roma_id": "tsugai", "dan_id": "i_dan", "gyo_id": "ta_gyo" },
  // 漢字: 父
  // (小学1年生で既に出力済み)
  // 漢字: 風
  "kan_fuu": { "display_char": "風", "rarity": 3, "roma_id": "fuu", "dan_id": "u_dan", "gyo_id": "ha_gyo" },
  "kan_fu2": { "display_char": "風", "rarity": 3, "roma_id": "fu", "dan_id": "u_dan", "gyo_id": "ha_gyo" }, // 父(fu)と競合
  "kan_kaze": { "display_char": "風", "rarity": 3, "roma_id": "kaze", "dan_id": "e_dan", "gyo_id": "ka_gyo" },
  "kan_kaza": { "display_char": "風", "rarity": 3, "roma_id": "kaza", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 分
  "kan_bun2": { "display_char": "分", "rarity": 3, "roma_id": "bun", "dan_id": "u_dan", "gyo_id": "ba_gyo" }, // 文(bun)と競合
  "kan_fun": { "display_char": "分", "rarity": 3, "roma_id": "fun", "dan_id": "u_dan", "gyo_id": "ha_gyo" },
  "kan_bu": { "display_char": "分", "rarity": 3, "roma_id": "bu", "dan_id": "u_dan", "gyo_id": "ba_gyo" },
  "kan_wa2": { "display_char": "分", "rarity": 3, "roma_id": "wa", "dan_id": "a_dan", "gyo_id": "wa_gyo" }, // 羽(wa)と競合
  // 漢字: 聞
  "kan_bun3": { "display_char": "聞", "rarity": 3, "roma_id": "bun", "dan_id": "u_dan", "gyo_id": "ba_gyo" }, // 文(bun), 分(bun)と競合
  "kan_mon2": { "display_char": "聞", "rarity": 3, "roma_id": "mon", "dan_id": "o_dan", "gyo_id": "ma_gyo" }, // 文(mon)と競合
  "kan_ki9": { "display_char": "聞", "rarity": 3, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 米
  "kan_bei": { "display_char": "米", "rarity": 3, "roma_id": "bei", "dan_id": "e_dan", "gyo_id": "ba_gyo" },
  "kan_mai": { "display_char": "米", "rarity": 3, "roma_id": "mai", "dan_id": "a_dan", "gyo_id": "ma_gyo" },
  "kan_kome": { "display_char": "米", "rarity": 3, "roma_id": "kome", "dan_id": "e_dan", "gyo_id": "ka_gyo" },
  // 漢字: 母
  // (小学1年生で既に出力済み)
  // 漢字: 歩
  "kan_ho2": { "display_char": "歩", "rarity": 3, "roma_id": "ho", "dan_id": "o_dan", "gyo_id": "ha_gyo" }, // 火(ho)と競合
  "kan_bu2": { "display_char": "歩", "rarity": 3, "roma_id": "bu", "dan_id": "u_dan", "gyo_id": "ba_gyo" }, // 分(bu)と競合
  "kan_fu3": { "display_char": "歩", "rarity": 3, "roma_id": "fu", "dan_id": "u_dan", "gyo_id": "ha_gyo" }, // 父(fu), 風(fu)と競合
  "kan_aru": { "display_char": "歩", "rarity": 3, "roma_id": "aru", "dan_id": "u_dan", "gyo_id": "a_gyo" },
  "kan_ayu": { "display_char": "歩", "rarity": 3, "roma_id": "ayu", "dan_id": "u_dan", "gyo_id": "a_gyo" },
  // 漢字: 方
  "kan_hou": { "display_char": "方", "rarity": 3, "roma_id": "hou", "dan_id": "o_dan", "gyo_id": "ha_gyo" },
  "kan_kata2": { "display_char": "方", "rarity": 3, "roma_id": "kata", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 形(kata), 語(kata)と競合
  // 漢字: 北
  // (小学1年生で既に出力済み)
  // 漢字: 毎
  "kan_mai2": { "display_char": "毎", "rarity": 3, "roma_id": "mai", "dan_id": "a_dan", "gyo_id": "ma_gyo" }, // 米(mai)と競合
  // 漢字: 万
  // (小学1年生で既に出力済み)
  // 漢字: 明
  "kan_mei2": { "display_char": "明", "rarity": 3, "roma_id": "mei", "dan_id": "e_dan", "gyo_id": "ma_gyo" }, // 名(mei)と競合
  "kan_myou2": { "display_char": "明", "rarity": 3, "roma_id": "myou", "dan_id": "o_dan", "gyo_id": "ma_gyo" }, // 名(myou)と競合
  "kan_min": { "display_char": "明", "rarity": 3, "roma_id": "min", "dan_id": "i_dan", "gyo_id": "ma_gyo" },
  "kan_a6": { "display_char": "明", "rarity": 3, "roma_id": "a", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_aka3": { "display_char": "明", "rarity": 3, "roma_id": "aka", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // 赤(aka, aka2)と競合
  // 漢字: 鳴
  "kan_mei3": { "display_char": "鳴", "rarity": 3, "roma_id": "mei", "dan_id": "e_dan", "gyo_id": "ma_gyo" }, // 名(mei), 明(mei)と競合
  "kan_na3": { "display_char": "鳴", "rarity": 3, "roma_id": "na", "dan_id": "a_dan", "gyo_id": "na_gyo" }, // 南(na), 名(na)と競合
  // 漢字: 毛
  "kan_mou": { "display_char": "毛", "rarity": 3, "roma_id": "mou", "dan_id": "o_dan", "gyo_id": "ma_gyo" },
  "kan_ke3": { "display_char": "毛", "rarity": 3, "roma_id": "ke", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 気(ke), 家(ke)と競合
  // 漢字: 夜
  "kan_ya5": { "display_char": "夜", "rarity": 3, "roma_id": "ya", "dan_id": "a_dan", "gyo_id": "ya_gyo" }, // 八, 家, 止, 矢 と競合
  "kan_yo5": { "display_char": "夜", "rarity": 3, "roma_id": "yo", "dan_id": "o_dan", "gyo_id": "ya_gyo" }, // 四(yo), 読(yo)と競合
  "kan_yoru": { "display_char": "夜", "rarity": 3, "roma_id": "yoru", "dan_id": "u_dan", "gyo_id": "ya_gyo" },
  // 漢字: 野
  "kan_ya6": { "display_char": "野", "rarity": 3, "roma_id": "ya", "dan_id": "a_dan", "gyo_id": "ya_gyo" }, // ...競合
  "kan_sho4": { "display_char": "野", "rarity": 3, "roma_id": "sho", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_no": { "display_char": "野", "rarity": 3, "roma_id": "no", "dan_id": "o_dan", "gyo_id": "na_gyo" },
  // 漢字: 友
  // (小学1年生で既に出力済み)
  // 漢字: 用
  "kan_you2": { "display_char": "用", "rarity": 3, "roma_id": "you", "dan_id": "o_dan", "gyo_id": "ya_gyo" }, // 八(you)と競合
  "kan_mochi": { "display_char": "用", "rarity": 3, "roma_id": "mochi", "dan_id": "i_dan", "gyo_id": "ma_gyo" },
  // 漢字: 曜
  "kan_you3": { "display_char": "曜", "rarity": 3, "roma_id": "you", "dan_id": "o_dan", "gyo_id": "ya_gyo" }, // 八(you), 用(you)と競合
  // 漢字: 来
  "kan_rai": { "display_char": "来", "rarity": 3, "roma_id": "rai", "dan_id": "a_dan", "gyo_id": "ra_gyo" },
  "kan_ku6": { "display_char": "来", "rarity": 3, "roma_id": "ku", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ki10": { "display_char": "来", "rarity": 3, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kita2": { "display_char": "来", "rarity": 3, "roma_id": "kita", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 北(kita)と競合
  // 漢字: 里
  "kan_ri": { "display_char": "里", "rarity": 3, "roma_id": "ri", "dan_id": "i_dan", "gyo_id": "ra_gyo" },
  "kan_sato": { "display_char": "里", "rarity": 3, "roma_id": "sato", "dan_id": "o_dan", "gyo_id": "sa_gyo" },
  // 漢字: 理
  "kan_ri2": { "display_char": "理", "rarity": 3, "roma_id": "ri", "dan_id": "i_dan", "gyo_id": "ra_gyo" }, // 里(ri)と競合
  "kan_kotowari": { "display_char": "理", "rarity": 3, "roma_id": "kotowari", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  // 漢字: 話
  "kan_wa3": { "display_char": "話", "rarity": 3, "roma_id": "wa", "dan_id": "a_dan", "gyo_id": "wa_gyo" }, // 羽(wa), 分(wa)と競合
  "kan_hana2": { "display_char": "話", "rarity": 3, "roma_id": "hana", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // 花(hana)と競合
  "kan_hanashi": { "display_char": "話", "rarity": 3, "roma_id": "hanashi", "dan_id": "i_dan", "gyo_id": "ha_gyo" },

  // --- 15. 漢字 (小学3年生・パート1/5) ---
  // Rarity: 3
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 悪
  "kan_aku": { "display_char": "悪", "rarity": 3, "roma_id": "aku", "dan_id": "u_dan", "gyo_id": "a_gyo" },
  "kan_o3": { "display_char": "悪", "rarity": 3, "roma_id": "o", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // 生, 下, 行 と競合
  "kan_waru": { "display_char": "悪", "rarity": 3, "roma_id": "waru", "dan_id": "u_dan", "gyo_id": "wa_gyo" },
  // 漢字: 安
  "kan_an2": { "display_char": "安", "rarity": 3, "roma_id": "an", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // 行(an)と競合
  "kan_yasu2": { "display_char": "安", "rarity": 3, "roma_id": "yasu", "dan_id": "u_dan", "gyo_id": "ya_gyo" }, // 休(yasu)と競合
  // 漢字: 暗
  "kan_an3": { "display_char": "暗", "rarity": 3, "roma_id": "an", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // 行(an), 安(an)と競合
  "kan_kura": { "display_char": "暗", "rarity": 3, "roma_id": "kura", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 医
  "kan_i4": { "display_char": "医", "rarity": 3, "roma_id": "i", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // 生, 言, 行 と競合
  // 漢字: 委
  "kan_i5": { "display_char": "委", "rarity": 3, "roma_id": "i", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_yuda": { "display_char": "委", "rarity": 3, "roma_id": "yuda", "dan_id": "a_dan", "gyo_id": "ya_gyo" },
  // 漢字: 意
  "kan_i6": { "display_char": "意", "rarity": 3, "roma_id": "i", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 育
  "kan_iku": { "display_char": "育", "rarity": 3, "roma_id": "iku", "dan_id": "u_dan", "gyo_id": "i_gyo" }, //
  "kan_soda": { "display_char": "育", "rarity": 3, "roma_id": "soda", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  // 漢字: 員
  "kan_in3": { "display_char": "員", "rarity": 3, "roma_id": "in", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // 音(in), 引(in)と競合
  // 漢字: 院
  "kan_in4": { "display_char": "院", "rarity": 3, "roma_id": "in", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 飲
  "kan_in5": { "display_char": "飲", "rarity": 3, "roma_id": "in", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_no": { "display_char": "飲", "rarity": 3, "roma_id": "no", "dan_id": "o_dan", "gyo_id": "na_gyo" }, // 野(no)と競合
  // 漢字: 運
  "kan_un2": { "display_char": "運", "rarity": 3, "roma_id": "un", "dan_id": "u_dan", "gyo_id": "a_gyo" }, // 雲(un)と競合
  "kan_hako": { "display_char": "運", "rarity": 3, "roma_id": "hako", "dan_id": "o_dan", "gyo_id": "ha_gyo" },
  // 漢字: 泳
  "kan_ei": { "display_char": "泳", "rarity": 3, "roma_id": "ei", "dan_id": "e_dan", "gyo_id": "e_gyo" }, //
  "kan_oyo": { "display_char": "泳", "rarity": 3, "roma_id": "oyo", "dan_id": "o_dan", "gyo_id": "o_gyo" }, //
  // 漢字: 駅
  "kan_eki": { "display_char": "駅", "rarity": 3, "roma_id": "eki", "dan_id": "i_dan", "gyo_id": "e_gyo" }, //
  // 漢字: 央
  "kan_ou3": { "display_char": "央", "rarity": 3, "roma_id": "ou", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // 王(ou), 黄(ou)と競合
  // 漢字: 横
  "kan_ou4": { "display_char": "横", "rarity": 3, "roma_id": "ou", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_yoko": { "display_char": "横", "rarity": 3, "roma_id": "yoko", "dan_id": "o_dan", "gyo_id": "ya_gyo" },
  // 漢字: 屋
  "kan_oku2": { "display_char": "屋", "rarity": 3, "roma_id": "oku", "dan_id": "u_dan", "gyo_id": "o_gyo" }, // 後(oku)と競合
  "kan_ya7": { "display_char": "屋", "rarity": 3, "roma_id": "ya", "dan_id": "a_dan", "gyo_id": "ya_gyo" }, // ...競合
  // 漢字: 温
  "kan_on3": { "display_char": "温", "rarity": 3, "roma_id": "on", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // 音(on), 遠(on)と競合
  "kan_atata": { "display_char": "温", "rarity": 3, "roma_id": "atata", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  // 漢字: 化
  "kan_ka": { "display_char": "化", "rarity": 3, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 非常に多くの競合あり
  "kan_ke4": { "display_char": "化", "rarity": 3, "roma_id": "ke", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 気, 家, 毛 と競合
  "kan_ba3": { "display_char": "化", "rarity": 3, "roma_id": "ba", "dan_id": "a_dan", "gyo_id": "ba_gyo" }, // 場(ba), 馬(ba)と競合
  // 漢字: 荷
  "kan_ka12": { "display_char": "荷", "rarity": 3, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ni2": { "display_char": "荷", "rarity": 3, "roma_id": "ni", "dan_id": "i_dan", "gyo_id": "na_gyo" }, // 二(ni)と競合
  // 漢字: 界
  "kan_kai6": { "display_char": "界", "rarity": 3, "roma_id": "kai", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 開
  "kan_kai7": { "display_char": "開", "rarity": 3, "roma_id": "kai", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_hira": { "display_char": "開", "rarity": 3, "roma_id": "hira", "dan_id": "a_dan", "gyo_id": "ha_gyo" },
  "kan_a7": { "display_char": "開", "rarity": 3, "roma_id": "a", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 階
  "kan_kai8": { "display_char": "階", "rarity": 3, "roma_id": "kai", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 寒
  "kan_kan2": { "display_char": "寒", "rarity": 3, "roma_id": "kan", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 間(kan)と競合
  "kan_samu": { "display_char": "寒", "rarity": 3, "roma_id": "samu", "dan_id": "u_dan", "gyo_id": "sa_gyo" },
  // 漢字: 感
  "kan_kan3": { "display_char": "感", "rarity": 3, "roma_id": "kan", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 間(kan), 寒(kan)と競合
  // 漢字: 漢
  "kan_kan4": { "display_char": "漢", "rarity": 3, "roma_id": "kan", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 館
  "kan_kan5": { "display_char": "館", "rarity": 3, "roma_id": "kan", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_yakata": { "display_char": "館", "rarity": 3, "roma_id": "yakata", "dan_id": "a_dan", "gyo_id": "ya_gyo" },
  "kan_tate": { "display_char": "館", "rarity": 3, "roma_id": "tate", "dan_id": "e_dan", "gyo_id": "ta_gyo" },
  // 漢字: 岸
  "kan_gan5": { "display_char": "岸", "rarity": 3, "roma_id": "gan", "dan_id": "a_dan", "gyo_id": "ga_gyo" }, // 丸, 岩, 顔, 元 と競合
  "kan_kishi": { "display_char": "岸", "rarity": 3, "roma_id": "kishi", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  // 漢字: 起
  "kan_ki11": { "display_char": "起", "rarity": 3, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_o4": { "display_char": "起", "rarity": 3, "roma_id": "o", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // 生, 下, 行, 悪 と競合
  "kan_oko": { "display_char": "起", "rarity": 3, "roma_id": "oko", "dan_id": "o_dan", "gyo_id": "o_gyo" }, //
  "kan_ta8": { "display_char": "起", "rarity": 3, "roma_id": "ta", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // ...競合
  // 漢字: 期
  "kan_ki12": { "display_char": "期", "rarity": 3, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_go5": { "display_char": "期", "rarity": 3, "roma_id": "go", "dan_id": "o_dan", "gyo_id": "ga_gyo" }, // ...競合
  // 漢字: 客
  "kan_kyaku": { "display_char": "客", "rarity": 3, "roma_id": "kyaku", "dan_id": "u_dan", "gyo_id": "ka_gyo" },
  "kan_kaku3": { "display_char": "客", "rarity": 3, "roma_id": "kaku", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 画(kaku), 角(kaku)と競合
  // 漢字: 究
  "kan_kyuu4": { "display_char": "究", "rarity": 3, "roma_id": "kyuu", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 九, 休, 弓 と競合
  "kan_ku5": { "display_char": "究", "rarity": 3, "roma_id": "ku", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kiwama2": { "display_char": "究", "rarity": 3, "roma_id": "kiwama", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 谷(kiwama)と競合
  // 漢字: 急
  "kan_kyuu5": { "display_char": "急", "rarity": 3, "roma_id": "kyuu", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_iso": { "display_char": "急", "rarity": 3, "roma_id": "iso", "dan_id": "o_dan", "gyo_id": "i_gyo" }, //
  // 漢字: 級
  "kan_kyuu6": { "display_char": "級", "rarity": 3, "roma_id": "kyuu", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 宮
  "kan_kyuu7": { "display_char": "宮", "rarity": 3, "roma_id": "kyuu", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_guu": { "display_char": "宮", "rarity": 3, "roma_id": "guu", "dan_id": "u_dan", "gyo_id": "ga_gyo" },
  "kan_ku6": { "display_char": "宮", "rarity": 3, "roma_id": "ku", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_miya": { "display_char": "宮", "rarity": 3, "roma_id": "miya", "dan_id": "a_dan", "gyo_id": "ma_gyo" },
  // 漢字: 球
  "kan_kyuu8": { "display_char": "球", "rarity": 3, "roma_id": "kyuu", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_tama": { "display_char": "球", "rarity": 3, "roma_id": "tama", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  // 漢字: 去
  "kan_kyo": { "display_char": "去", "rarity": 3, "roma_id": "kyo", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  "kan_ko5": { "display_char": "去", "rarity": 3, "roma_id": "ko", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_sa5": { "display_char": "去", "rarity": 3, "roma_id": "sa", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // 下, 左, 作, 茶 と競合
  // 漢字: 橋
  "kan_kyou6": { "display_char": "橋", "rarity": 3, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 校, 京, 強, 教, 兄 と競合
  "kan_hashi2": { "display_char": "橋", "rarity": 3, "roma_id": "hashi", "dan_id": "i_dan", "gyo_id": "ha_gyo" }, // 走(hashi)と競合
  // 漢字: 業
  "kan_gyou3": { "display_char": "業", "rarity": 3, "roma_id": "gyou", "dan_id": "o_dan", "gyo_id": "ga_gyo" }, // 形(gyou), 行(gyou)と競合
  "kan_gou3": { "display_char": "業", "rarity": 3, "roma_id": "gou", "dan_id": "o_dan", "gyo_id": "ga_gyo" }, // 強(gou), 合(gou)と競合
  "kan_waza": { "display_char": "業", "rarity": 3, "roma_id": "waza", "dan_id": "a_dan", "gyo_id": "wa_gyo" },
  // 漢字: 曲
  "kan_kyoku": { "display_char": "曲", "rarity": 3, "roma_id": "kyoku", "dan_id": "u_dan", "gyo_id": "ka_gyo" },
  "kan_ma": { "display_char": "曲", "rarity": 3, "roma_id": "ma", "dan_id": "a_dan", "gyo_id": "ma_gyo" }, // 多くの競合あり

  // --- 15. 漢字 (小学3年生・パート2/5) ---
  // Rarity: 3
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 局
  "kan_kyoku2": { "display_char": "局", "rarity": 3, "roma_id": "kyoku", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 曲(kyoku)と競合
  "kan_tsubone": { "display_char": "局", "rarity": 3, "roma_id": "tsubone", "dan_id": "e_dan", "gyo_id": "ta_gyo" },
  // 漢字: 銀
  "kan_gin": { "display_char": "銀", "rarity": 3, "roma_id": "gin", "dan_id": "i_dan", "gyo_id": "ga_gyo" },
  "kan_shirogane": { "display_char": "銀", "rarity": 3, "roma_id": "shirogane", "dan_id": "e_dan", "gyo_id": "sa_gyo" },
  // 漢字: 区
  "kan_ku7": { "display_char": "区", "rarity": 3, "roma_id": "ku", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ou5": { "display_char": "区", "rarity": 3, "roma_id": "ou", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 苦
  "kan_ku8": { "display_char": "苦", "rarity": 3, "roma_id": "ku", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kuru": { "display_char": "苦", "rarity": 3, "roma_id": "kuru", "dan_id": "u_dan", "gyo_id": "ka_gyo" },
  "kan_niga": { "display_char": "苦", "rarity": 3, "roma_id": "niga", "dan_id": "a_dan", "gyo_id": "na_gyo" },
  // 漢字: 具
  "kan_gu": { "display_char": "具", "rarity": 3, "roma_id": "gu", "dan_id": "u_dan", "gyo_id": "ga_gyo" },
  "kan_sona": { "display_char": "具", "rarity": 3, "roma_id": "sona", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  // 漢字: 君
  "kan_kun": { "display_char": "君", "rarity": 3, "roma_id": "kun", "dan_id": "u_dan", "gyo_id": "ka_gyo" },
  "kan_kimi": { "display_char": "君", "rarity": 3, "roma_id": "kimi", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  // 漢字: 係
  "kan_kei5": { "display_char": "係", "rarity": 3, "roma_id": "kei", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 京, 兄, 形, 計 と競合
  "kan_kaka": { "display_char": "係", "rarity": 3, "roma_id": "kaka", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 軽
  "kan_kei6": { "display_char": "軽", "rarity": 3, "roma_id": "kei", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kyou7": { "display_char": "軽", "rarity": 3, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_karu": { "display_char": "軽", "rarity": 3, "roma_id": "karu", "dan_id": "u_dan", "gyo_id": "ka_gyo" },
  // 漢字: 血
  "kan_ketsu": { "display_char": "血", "rarity": 3, "roma_id": "ketsu", "dan_id": "e_dan", "gyo_id": "ka_gyo" },
  "kan_chi5": { "display_char": "血", "rarity": 3, "roma_id": "chi", "dan_id": "i_dan", "gyo_id": "ta_gyo" }, // 千, 地, 池, 知 と競合
  // 漢字: 決
  "kan_ketsu2": { "display_char": "決", "rarity": 3, "roma_id": "ketsu", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 血(ketsu)と競合
  "kan_ki9": { "display_char": "決", "rarity": 3, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 研
  "kan_ken5": { "display_char": "研", "rarity": 3, "roma_id": "ken", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 剣, 犬, 見, 間 と競合
  "kan_to6": { "display_char": "研", "rarity": 3, "roma_id": "to", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  // 漢字: 県
  "kan_ken6": { "display_char": "県", "rarity": 3, "roma_id": "ken", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kake": { "display_char": "県", "rarity": 3, "roma_id": "kake", "dan_id": "e_dan", "gyo_id": "ka_gyo" },
  // 漢字: 庫
  "kan_ko6": { "display_char": "庫", "rarity": 3, "roma_id": "ko", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ku9": { "display_char": "庫", "rarity": 3, "roma_id": "ku", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kura2": { "display_char": "庫", "rarity": 3, "roma_id": "kura", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 暗(kura)と競合
  // 漢字: 湖
  "kan_ko7": { "display_char": "湖", "rarity": 3, "roma_id": "ko", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_mizuu": { "display_char": "湖", "rarity": 3, "roma_id": "mizuu", "dan_id": "u_dan", "gyo_id": "ma_gyo" },
  // 漢字: 向
  "kan_kou13": { "display_char": "向", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_mu2": { "display_char": "向", "rarity": 3, "roma_id": "mu", "dan_id": "u_dan", "gyo_id": "ma_gyo" }, // 六(mu)と競合
  "kan_mu3": { "display_char": "向", "rarity": 3, "roma_id": "mu", "dan_id": "u_dan", "gyo_id": "ma_gyo" }, // 競合
  // 漢字: 幸
  "kan_kou14": { "display_char": "幸", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_saiwai": { "display_char": "幸", "rarity": 3, "roma_id": "saiwai", "dan_id": "i_dan", "gyo_id": "sa_gyo" },
  "kan_sachi": { "display_char": "幸", "rarity": 3, "roma_id": "sachi", "dan_id": "i_dan", "gyo_id": "sa_gyo" },
  // 漢字: 港
  "kan_kou15": { "display_char": "港", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_minato": { "display_char": "港", "rarity": 3, "roma_id": "minato", "dan_id": "o_dan", "gyo_id": "ma_gyo" },
  // 漢字: 号
  "kan_gou4": { "display_char": "号", "rarity": 3, "roma_id": "gou", "dan_id": "o_dan", "gyo_id": "ga_gyo" }, // 強, 合, 業 と競合
  "kan_sake": { "display_char": "号", "rarity": 3, "roma_id": "sake", "dan_id": "e_dan", "gyo_id": "sa_gyo" },
  // 漢字: 根
  "kan_kon4": { "display_char": "根", "rarity": 3, "roma_id": "kon", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 金, 近, 今 と競合
  "kan_ne2": { "display_char": "根", "rarity": 3, "roma_id": "ne", "dan_id": "e_dan", "gyo_id": "na_gyo" }, // 音(ne)と競合
  // 漢字: 祭
  "kan_sai5": { "display_char": "祭", "rarity": 3, "roma_id": "sai", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // 西, 才, 細, 切 と競合
  "kan_matsu": { "display_char": "祭", "rarity": 3, "roma_id": "matsu", "dan_id": "u_dan", "gyo_id": "ma_gyo" },
  // 漢字: 皿
  "kan_bei2": { "display_char": "皿", "rarity": 3, "roma_id": "bei", "dan_id": "e_dan", "gyo_id": "ba_gyo" }, // 米(bei)と競合
  "kan_sara": { "display_char": "皿", "rarity": 3, "roma_id": "sara", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  // 漢字: 仕
  "kan_shi10": { "display_char": "仕", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_ji8": { "display_char": "仕", "rarity": 3, "roma_id": "ji", "dan_id": "i_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_tsuka": { "display_char": "仕", "rarity": 3, "roma_id": "tsuka", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  // 漢字: 死
  "kan_shi11": { "display_char": "死", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_shi": { "display_char": "死", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // 競合
  // 漢字: 使
  "kan_shi12": { "display_char": "使", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_tsuka2": { "display_char": "使", "rarity": 3, "roma_id": "tsuka", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // 仕(tsuka)と競合
  // 漢字: 始
  "kan_shi13": { "display_char": "始", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_haji": { "display_char": "始", "rarity": 3, "roma_id": "haji", "dan_id": "i_dan", "gyo_id": "ha_gyo" },
  // 漢字: 指
  "kan_shi14": { "display_char": "指", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_yubi": { "display_char": "指", "rarity": 3, "roma_id": "yubi", "dan_id": "i_dan", "gyo_id": "ya_gyo" },
  "kan_sa6": { "display_char": "指", "rarity": 3, "roma_id": "sa", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // 下, 左, 作, 茶, 去 と競合
  // 漢字: 歯
  "kan_shi15": { "display_char": "歯", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_ha5": { "display_char": "歯", "rarity": 3, "roma_id": "ha", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // 生, 羽, 晴 と競合
  // 漢字: 詩
  "kan_shi16": { "display_char": "詩", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_uta2": { "display_char": "詩", "rarity": 3, "roma_id": "uta", "dan_id": "a_dan", "gyo_id": "u_gyo" }, // 歌(uta)と競合
  // 漢字: 次
  "kan_ji9": { "display_char": "次", "rarity": 3, "roma_id": "ji", "dan_id": "i_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_shi17": { "display_char": "次", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_tsugi": { "display_char": "次", "rarity": 3, "roma_id": "tsugi", "dan_id": "i_dan", "gyo_id": "ta_gyo" },
  "kan_tsu2": { "display_char": "次", "rarity": 3, "roma_id": "tsu", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // 通(tsu)と競合
  // 漢字: 事
  "kan_ji10": { "display_char": "事", "rarity": 3, "roma_id": "ji", "dan_id": "i_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_zu4": { "display_char": "事", "rarity": 3, "roma_id": "zu", "dan_id": "u_dan", "gyo_id": "za_gyo" }, // 手, 図, 頭 と競合
  "kan_koto2": { "display_char": "事", "rarity": 3, "roma_id": "koto", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 言(koto)と競合
  // 漢字: 持
  "kan_ji11": { "display_char": "持", "rarity": 3, "roma_id": "ji", "dan_id": "i_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_mo": { "display_char": "持", "rarity": 3, "roma_id": "mo", "dan_id": "o_dan", "gyo_id": "ma_gyo" },
  // 漢字: 式
  "kan_shiki2": { "display_char": "式", "rarity": 3, "roma_id": "shiki", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // 色(shiki)と競合
  // 漢字: 実
  "kan_jitsu2": { "display_char": "実", "rarity": 3, "roma_id": "jitsu", "dan_id": "i_dan", "gyo_id": "za_gyo" }, // 日(jitsu)と競合
  "kan_shitsu2": { "display_char": "実", "rarity": 3, "roma_id": "shitsu", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // 室(shitsu)と競合
  "kan_mi4": { "display_char": "実", "rarity": 3, "roma_id": "mi", "dan_id": "i_dan", "gyo_id": "ma_gyo" }, // 三(mi), 見(mi)と競合
  "kan_mino": { "display_char": "実", "rarity": 3, "roma_id": "mino", "dan_id": "o_dan", "gyo_id": "ma_gyo" },
  // 漢字: 写
  "kan_sha3": { "display_char": "写", "rarity": 3, "roma_id": "sha", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // 車(sha), 社(sha)と競合
  "kan_ja": { "display_char": "写", "rarity": 3, "roma_id": "ja", "dan_id": "a_dan", "gyo_id": "za_gyo" },
  "kan_utsu": { "display_char": "写", "rarity": 3, "roma_id": "utsu", "dan_id": "u_dan", "gyo_id": "u_gyo" }, //
  // 漢字: 者
  "kan_sha4": { "display_char": "者", "rarity": 3, "roma_id": "sha", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_mono": { "display_char": "者", "rarity": 3, "roma_id": "mono", "dan_id": "o_dan", "gyo_id": "ma_gyo" },
  // 漢字: 主
  "kan_shu3": { "display_char": "主", "rarity": 3, "roma_id": "shu", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // 手(shu), 首(shu)と競合
  "kan_su3": { "display_char": "主", "rarity": 3, "roma_id": "su", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // 子(su), 数(su)と競合
  "kan_nushi": { "display_char": "主", "rarity": 3, "roma_id": "nushi", "dan_id": "i_dan", "gyo_id": "na_gyo" },
  "kan_omo2": { "display_char": "主", "rarity": 3, "roma_id": "omo", "dan_id": "o_dan", "gyo_id": "o_gyo" }, // 思(omo)と競合
  // 漢字: 守
  "kan_shu4": { "display_char": "守", "rarity": 3, "roma_id": "shu", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_su4": { "display_char": "守", "rarity": 3, "roma_id": "su", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_mamo": { "display_char": "守", "rarity": 3, "roma_id": "mamo", "dan_id": "o_dan", "gyo_id": "ma_gyo" },
  "kan_mori2": { "display_char": "守", "rarity": 3, "roma_id": "mori", "dan_id": "o_dan", "gyo_id": "ma_gyo" }, // 森(mori)と競合
  "kan_kami3": { "display_char": "守", "rarity": 3, "roma_id": "kami", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // 上(kami), 紙(kami)と競合
  
  // --- 15. 漢字 (小学3年生・パート3/5) ---
  // Rarity: 3
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 取
  "kan_shu5": { "display_char": "取", "rarity": 3, "roma_id": "shu", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // 手, 首, 主, 守 と競合
  "kan_to7": { "display_char": "取", "rarity": 3, "roma_id": "to", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  // 漢字: 酒
  "kan_shu6": { "display_char": "酒", "rarity": 3, "roma_id": "shu", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_sake2": { "display_char": "酒", "rarity": 3, "roma_id": "sake", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // 号(sake)と競合
  "kan_saka": { "display_char": "酒", "rarity": 3, "roma_id": "saka", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  // 漢字: 受
  "kan_ju3": { "display_char": "受", "rarity": 3, "roma_id": "ju", "dan_id": "u_dan", "gyo_id": "za_gyo" }, // 十(juu), 中(juu)と競合
  "kan_u6": { "display_char": "受", "rarity": 3, "roma_id": "u", "dan_id": "u_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 州
  "kan_shuu3": { "display_char": "州", "rarity": 3, "roma_id": "shuu", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // 秋(shuu), 週(shuu)と競合
  "kan_su5": { "display_char": "州", "rarity": 3, "roma_id": "su", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  // 漢字: 拾
  "kan_shuu4": { "display_char": "拾", "rarity": 3, "roma_id": "shuu", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_juu4": { "display_char": "拾", "rarity": 3, "roma_id": "juu", "dan_id": "u_dan", "gyo_id": "za_gyo" }, // 十, 中, 受 と競合
  "kan_hiro2": { "display_char": "拾", "rarity": 3, "roma_id": "hiro", "dan_id": "o_dan", "gyo_id": "ha_gyo" }, // 広(hiro)と競合
  // 漢字: 終
  "kan_shuu5": { "display_char": "終", "rarity": 3, "roma_id": "shuu", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_o8": { "display_char": "終", "rarity": 3, "roma_id": "o", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 習
  "kan_shuu6": { "display_char": "習", "rarity": 3, "roma_id": "shuu", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_juu5": { "display_char": "習", "rarity": 3, "roma_id": "juu", "dan_id": "u_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_nara": { "display_char": "習", "rarity": 3, "roma_id": "nara", "dan_id": "a_dan", "gyo_id": "na_gyo" },
  // 漢字: 集
  "kan_shuu7": { "display_char": "集", "rarity": 3, "roma_id": "shuu", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_atsu": { "display_char": "集", "rarity": 3, "roma_id": "atsu", "dan_id": "u_dan", "gyo_id": "a_gyo" },
  "kan_tsudo": { "display_char": "集", "rarity": 3, "roma_id": "tsudo", "dan_id": "o_dan", "gyo_id": "ta_gyo" },
  // 漢字: 住
  "kan_juu6": { "display_char": "住", "rarity": 3, "roma_id": "juu", "dan_id": "u_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_su6": { "display_char": "住", "rarity": 3, "roma_id": "su", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  // 漢字: 重
  "kan_juu7": { "display_char": "重", "rarity": 3, "roma_id": "juu", "dan_id": "u_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_chou5": { "display_char": "重", "rarity": 3, "roma_id": "chou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // 町, 長, 鳥, 朝 と競合
  "kan_omo3": { "display_char": "重", "rarity": 3, "roma_id": "omo", "dan_id": "o_dan", "gyo_id": "o_gyo" }, // 思(omo), 主(omo)と競合
  "kan_kasa": { "display_char": "重", "rarity": 3, "roma_id": "kasa", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 宿
  "kan_shuku": { "display_char": "宿", "rarity": 3, "roma_id": "shuku", "dan_id": "u_dan", "gyo_id": "sa_gyo" },
  "kan_yado": { "display_char": "宿", "rarity": 3, "roma_id": "yado", "dan_id": "o_dan", "gyo_id": "ya_gyo" },
  // 漢字: 所
  "kan_sho5": { "display_char": "所", "rarity": 3, "roma_id": "sho", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_tokoro": { "display_char": "所", "rarity": 3, "roma_id": "tokoro", "dan_id": "o_dan", "gyo_id": "ta_gyo" },
  // 漢字: 暑
  "kan_sho6": { "display_char": "暑", "rarity": 3, "roma_id": "sho", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_atsu2": { "display_char": "暑", "rarity": 3, "roma_id": "atsu", "dan_id": "u_dan", "gyo_id": "a_gyo" }, // 集(atsu)と競合
  // 漢字: 助
  "kan_jo2": { "display_char": "助", "rarity": 3, "roma_id": "jo", "dan_id": "o_dan", "gyo_id": "za_gyo" }, // 女(jo)と競合
  "kan_tasu": { "display_char": "助", "rarity": 3, "roma_id": "tasu", "dan_id": "u_dan", "gyo_id": "ta_gyo" },
  "kan_suke": { "display_char": "助", "rarity": 3, "roma_id": "suke", "dan_id": "e_dan", "gyo_id": "sa_gyo" },
  // 漢字: 昭
  "kan_shou8": { "display_char": "昭", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  // 漢字: 消
  "kan_shou9": { "display_char": "消", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_ki13": { "display_char": "消", "rarity": 3, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ke5": { "display_char": "消", "rarity": 3, "roma_id": "ke", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 気, 家, 毛, 化 と競合
  // 漢字: 商
  "kan_shou10": { "display_char": "商", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_akina": { "display_char": "商", "rarity": 3, "roma_id": "akina", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  // 漢字: 章
  "kan_shou11": { "display_char": "章", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  // 漢字: 勝
  "kan_shou12": { "display_char": "勝", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_ka13": { "display_char": "勝", "rarity": 3, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_masa2": { "display_char": "勝", "rarity": 3, "roma_id": "masa", "dan_id": "a_dan", "gyo_id": "ma_gyo" }, // 正(masa)と競合
  // 漢字: 乗
  "kan_jou3": { "display_char": "乗", "rarity": 3, "roma_id": "jou", "dan_id": "o_dan", "gyo_id": "za_gyo" }, // 上(jou), 場(jou)と競合
  "kan_no2": { "display_char": "乗", "rarity": 3, "roma_id": "no", "dan_id": "o_dan", "gyo_id": "na_gyo" }, // 野(no), 飲(no)と競合
  // 漢字: 植
  "kan_shoku3": { "display_char": "植", "rarity": 3, "roma_id": "shoku", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 食(shoku), 色(shoku)と競合
  "kan_u7": { "display_char": "植", "rarity": 3, "roma_id": "u", "dan_id": "u_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 申
  "kan_shin5": { "display_char": "申", "rarity": 3, "roma_id": "shin", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // 森, 心, 新, 親 と競合
  "kan_mou2": { "display_char": "申", "rarity": 3, "roma_id": "mou", "dan_id": "o_dan", "gyo_id": "ma_gyo" }, // 毛(mou)と競合
  "kan_saru": { "display_char": "申", "rarity": 3, "roma_id": "saru", "dan_id": "u_dan", "gyo_id": "sa_gyo" },
  // 漢字: 身
  "kan_shin6": { "display_char": "身", "rarity": 3, "roma_id": "shin", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_mi5": { "display_char": "身", "rarity": 3, "roma_id": "mi", "dan_id": "i_dan", "gyo_id": "ma_gyo" }, // 三, 見, 実 と競合
  // 漢字: 神
  "kan_shin7": { "display_char": "神", "rarity": 3, "roma_id": "shin", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_jin2": { "display_char": "神", "rarity": 3, "roma_id": "jin", "dan_id": "i_dan", "gyo_id": "za_gyo" }, // 人(jin)と競合
  "kan_kami4": { "display_char": "神", "rarity": 3, "roma_id": "kami", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // 上, 紙, 守 と競合
  "kan_kan2": { "display_char": "神", "rarity": 3, "roma_id": "kan", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 間, 寒, 感, 漢, 館 と競合
  "kan_kou16": { "display_char": "神", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 真
  "kan_shin8": { "display_char": "真", "rarity": 3, "roma_id": "shin", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_ma5": { "display_char": "真", "rarity": 3, "roma_id": "ma", "dan_id": "a_dan", "gyo_id": "ma_gyo" }, // ...競合
  "kan_mako": { "display_char": "真", "rarity": 3, "roma_id": "mako", "dan_id": "o_dan", "gyo_id": "ma_gyo" },
  // 漢字: 深
  "kan_shin9": { "display_char": "深", "rarity": 3, "roma_id": "shin", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_fuka": { "display_char": "深", "rarity": 3, "roma_id": "fuka", "dan_id": "a_dan", "gyo_id": "ha_gyo" },
  "kan_mi6": { "display_char": "深", "rarity": 3, "roma_id": "mi", "dan_id": "i_dan", "gyo_id": "ma_gyo" }, // ...競合
  // 漢字: 進
  "kan_shin10": { "display_char": "進", "rarity": 3, "roma_id": "shin", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_susu": { "display_char": "進", "rarity": 3, "roma_id": "susu", "dan_id": "u_dan", "gyo_id": "sa_gyo" },
  // 漢字: 世
  "kan_sei8": { "display_char": "世", "rarity": 3, "roma_id": "sei", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_sei9": { "display_char": "世", "rarity": 3, "roma_id": "sei", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // 競合
  "kan_yo6": { "display_char": "世", "rarity": 3, "roma_id": "yo", "dan_id": "o_dan", "gyo_id": "ya_gyo" }, // 四, 読, 夜 と競合
  // 漢字: 整
  "kan_sei10": { "display_char": "整", "rarity": 3, "roma_id": "sei", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_totono": { "display_char": "整", "rarity": 3, "roma_id": "totono", "dan_id": "o_dan", "gyo_id": "ta_gyo" },
  // 漢字: 昔
  "kan_seki3": { "display_char": "昔", "rarity": 3, "roma_id": "seki", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // 赤(seki), 石(seki)と競合
  "kan_shaku3": { "display_char": "昔", "rarity": 3, "roma_id": "shaku", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // 赤(shaku), 石(shaku)と競合
  "kan_mukashi": { "display_char": "昔", "rarity": 3, "roma_id": "mukashi", "dan_id": "i_dan", "gyo_id": "ma_gyo" },
  // 漢字: 全
  "kan_zen2": { "display_char": "全", "rarity": 3, "roma_id": "zen", "dan_id": "e_dan", "gyo_id": "za_gyo" }, // 前(zen)と競合
  "kan_matta": { "display_char": "全", "rarity": 3, "roma_id": "matta", "dan_id": "a_dan", "gyo_id": "ma_gyo" },
  // 漢字: 相
  "kan_sou3": { "display_char": "相", "rarity": 3, "roma_id": "sou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 草(sou), 走(sou)と競合
  "kan_shou13": { "display_char": "相", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_ai": { "display_char": "相", "rarity": 3, "roma_id": "ai", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  // 漢字: 送
  "kan_sou4": { "display_char": "送", "rarity": 3, "roma_id": "sou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_oku3": { "display_char": "送", "rarity": 3, "roma_id": "oku", "dan_id": "u_dan", "gyo_id": "o_gyo" }, // 後(oku), 屋(oku)と競合
  // 漢字: 想
  "kan_sou5": { "display_char": "想", "rarity": 3, "roma_id": "sou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_shou14": { "display_char": "想", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_omo4": { "display_char": "想", "rarity": 3, "roma_id": "omo", "dan_id": "o_dan", "gyo_id": "o_gyo" }, // 思, 主, 重 と競合
  // 漢字: 息
  "kan_soku2": { "display_char": "息", "rarity": 3, "roma_id": "soku", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 足(soku)と競合
  "kan_iki": { "display_char": "息", "rarity": 3, "roma_id": "iki", "dan_id": "i_dan", "gyo_id": "i_gyo" }, //
  // 漢字: 速
  "kan_soku3": { "display_char": "速", "rarity": 3, "roma_id": "soku", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 足(soku), 息(soku)と競合
  "kan_haya": { "display_char": "速", "rarity": 3, "roma_id": "haya", "dan_id": "a_dan", "gyo_id": "ha_gyo" },
  "kan_sumi": { "display_char": "速", "rarity": 3, "roma_id": "sumi", "dan_id": "i_dan", "gyo_id": "sa_gyo" },
  // 漢字: 族
  "kan_zoku": { "display_char": "族", "rarity": 3, "roma_id": "zoku", "dan_id": "u_dan", "gyo_id": "za_gyo" },
  // 漢字: 他
  "kan_ta9": { "display_char": "他", "rarity": 3, "roma_id": "ta", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_hoka2": { "display_char": "他", "rarity": 3, "roma_id": "hoka", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // 外(hoka)と競合
  // 漢字: 打
  "kan_da2": { "display_char": "打", "rarity": 3, "roma_id": "da", "dan_id": "a_dan", "gyo_id": "da_gyo" }, // 出(da)と競合
  "kan_u8": { "display_char": "打", "rarity": 3, "roma_id": "u", "dan_id": "u_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 対
  "kan_tai4": { "display_char": "対", "rarity": 3, "roma_id": "tai", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // 太, 体, 台 と競合
  "kan_tsui": { "display_char": "対", "rarity": 3, "roma_id": "tsui", "dan_id": "i_dan", "gyo_id": "ta_gyo" },
  // 漢字: 待
  "kan_tai5": { "display_char": "待", "rarity": 3, "roma_id": "tai", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_ma": { "display_char": "待", "rarity": 3, "roma_id": "ma", "dan_id": "a_dan", "gyo_id": "ma_gyo" }, // 多くの競合あり
  // 漢字: 代
  "kan_dai4": { "display_char": "代", "rarity": 3, "roma_id": "dai", "dan_id": "a_dan", "gyo_id": "da_gyo" }, // 台, 弟, 内 と競合
  "kan_tai6": { "display_char": "代", "rarity": 3, "roma_id": "tai", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_ka14": { "display_char": "代", "rarity": 3, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_yo7": { "display_char": "代", "rarity": 3, "roma_id": "yo", "dan_id": "o_dan", "gyo_id": "ya_gyo" }, // 四, 読, 夜, 世 と競合
  "kan_shiro2": { "display_char": "代", "rarity": 3, "roma_id": "shiro", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 白(shiro)と競合
  // 漢字: 第
  "kan_dai5": { "display_char": "第", "rarity": 3, "roma_id": "dai", "dan_id": "a_dan", "gyo_id": "da_gyo" }, // ...競合
  "kan_tei3": { "display_char": "第", "rarity": 3, "roma_id": "tei", "dan_id": "e_dan", "gyo_id": "ta_gyo" }, // 体(tei), 弟(tei)と競合
  // 漢字: 題
  "kan_dai6": { "display_char": "題", "rarity": 3, "roma_id": "dai", "dan_id": "a_dan", "gyo_id": "da_gyo" }, // ...競合
  // 漢字: 炭
  "kan_tan": { "display_char": "炭", "rarity": 3, "roma_id": "tan", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  "kan_sumi2": { "display_char": "炭", "rarity": 3, "roma_id": "sumi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // 速(sumi)と競合
  // 漢字: 短
  "kan_tan2": { "display_char": "短", "rarity": 3, "roma_id": "tan", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // 炭(tan)と競合
  "kan_mijika": { "display_char": "短", "rarity": 3, "roma_id": "mijika", "dan_id": "a_dan", "gyo_id": "ma_gyo" },
  // 漢字: 談
  "kan_dan2": { "display_char": "談", "rarity": 3, "roma_id": "dan", "dan_id": "a_dan", "gyo_id": "da_gyo" }, // 男(dan)と競合
  // 漢字: 地
  // (小学2年生で既に出力済み)
  // 漢字: 池
  // (小学2年生で既に出力済み)
  // 漢字: 知
  // (小学2年生で既に出力済み)
  // 漢字: 竹
  // (小学1年生で既に出力済み)
  // 漢字: 茶
  // (小学2年生で既に出力済み)
  // 漢字: 着
  "kan_chaku": { "display_char": "着", "rarity": 3, "roma_id": "chaku", "dan_id": "u_dan", "gyo_id": "ta_gyo" },
  "kan_jaku2": { "display_char": "着", "rarity": 3, "roma_id": "jaku", "dan_id": "u_dan", "gyo_id": "za_gyo" }, // 弱(jaku)と競合
  "kan_ki14": { "display_char": "着", "rarity": 3, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_tsu3": { "display_char": "着", "rarity": 3, "roma_id": "tsu", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // 通(tsu), 次(tsu)と競合
  // 漢字: 昼
  // (小学2年生で既に出力済み)
  // 漢字: 注
  "kan_chuu4": { "display_char": "注", "rarity": 3, "roma_id": "chuu", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // 中, 虫, 昼 と競合
  "kan_soso": { "display_char": "注", "rarity": 3, "roma_id": "soso", "dan_id": "o_dan", "gyo_id": "sa_gyo" },
  "kan_tsu4": { "display_char": "注", "rarity": 3, "roma_id": "tsu", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // ...競合
  // 漢字: 柱
  "kan_chuu5": { "display_char": "柱", "rarity": 3, "roma_id": "chuu", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_hashira": { "display_char": "柱", "rarity": 3, "roma_id": "hashira", "dan_id": "a_dan", "gyo_id": "ha_gyo" },
  // 漢字: 丁
  "kan_chou6": { "display_char": "丁", "rarity": 3, "roma_id": "chou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_tei4": { "display_char": "丁", "rarity": 3, "roma_id": "tei", "dan_id": "e_dan", "gyo_id": "ta_gyo" }, // 体, 弟, 第 と競合
  "kan_hinoto": { "display_char": "丁", "rarity": 3, "roma_id": "hinoto", "dan_id": "o_dan", "gyo_id": "ha_gyo" },
  // 漢字: 帳
  "kan_chou7": { "display_char": "帳", "rarity": 3, "roma_id": "chou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_tobari": { "display_char": "帳", "rarity": 3, "roma_id": "tobari", "dan_id": "i_dan", "gyo_id": "ta_gyo" },
  // 漢字: 調
  "kan_chou8": { "display_char": "調", "rarity": 3, "roma_id": "chou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_shira2": { "display_char": "調", "rarity": 3, "roma_id": "shira", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // 白(shira)と競合
  "kan_totono2": { "display_char": "調", "rarity": 3, "roma_id": "totono", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // 整(totono)と競合
  // 漢字: 追
  "kan_tsui2": { "display_char": "追", "rarity": 3, "roma_id": "tsui", "dan_id": "i_dan", "gyo_id": "ta_gyo" }, // 対(tsui)と競合
  "kan_o5": { "display_char": "追", "rarity": 3, "roma_id": "o", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 定
  "kan_tei5": { "display_char": "定", "rarity": 3, "roma_id": "tei", "dan_id": "e_dan", "gyo_id": "ta_gyo" }, // 体, 弟, 第, 丁 と競合
  "kan_jou4": { "display_char": "定", "rarity": 3, "roma_id": "jou", "dan_id": "o_dan", "gyo_id": "za_gyo" }, // 上, 場, 乗 と競合
  "kan_sada": { "display_char": "定", "rarity": 3, "roma_id": "sada", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  // 漢字: 庭
  "kan_tei6": { "display_char": "庭", "rarity": 3, "roma_id": "tei", "dan_id": "e_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_niwa": { "display_char": "庭", "rarity": 3, "roma_id": "niwa", "dan_id": "a_dan", "gyo_id": "na_gyo" },
  // 漢字: 笛
  "kan_teki": { "display_char": "笛", "rarity": 3, "roma_id": "teki", "dan_id": "i_dan", "gyo_id": "ta_gyo" },
  "kan_fue": { "display_char": "笛", "rarity": 3, "roma_id": "fue", "dan_id": "e_dan", "gyo_id": "ha_gyo" },
  // 漢字: 鉄
  "kan_tetsu": { "display_char": "鉄", "rarity": 3, "roma_id": "tetsu", "dan_id": "e_dan", "gyo_id": "ta_gyo" },
  "kan_kurogane": { "display_char": "鉄", "rarity": 3, "roma_id": "kurogane", "dan_id": "e_dan", "gyo_id": "ka_gyo" },
  // 漢字: 転
  "kan_ten4": { "display_char": "転", "rarity": 3, "roma_id": "ten", "dan_id": "e_dan", "gyo_id": "ta_gyo" }, // 天, 店, 点 と競合
  "kan_koro": { "display_char": "転", "rarity": 3, "roma_id": "koro", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  // 漢字: 都
  "kan_to8": { "display_char": "都", "rarity": 3, "roma_id": "to", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_tsu5": { "display_char": "都", "rarity": 3, "roma_id": "tsu", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_miyako": { "display_char": "都", "rarity": 3, "roma_id": "miyako", "dan_id": "o_dan", "gyo_id": "ma_gyo" },
  // 漢字: 度
  "kan_do2": { "display_char": "度", "rarity": 3, "roma_id": "do", "dan_id": "o_dan", "gyo_id": "da_gyo" }, // 土(do)と競合
  "kan_taku": { "display_char": "度", "rarity": 3, "roma_id": "taku", "dan_id": "u_dan", "gyo_id": "ta_gyo" },
  "kan_tabi": { "display_char": "度", "rarity": 3, "roma_id": "tabi", "dan_id": "i_dan", "gyo_id": "ta_gyo" },
  // 漢字: 島
  "kan_tou10": { "display_char": "島", "rarity": 3, "roma_id": "tou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_shima": { "display_char": "島", "rarity": 3, "roma_id": "shima", "dan_id": "a_dan", "gyo_id": "sa_gyo" },

  // --- 15. 漢字 (小学3年生・パート4/5) ---
  // Rarity: 3
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 湯
  "kan_tou11": { "display_char": "湯", "rarity": 3, "roma_id": "tou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_yu": { "display_char": "湯", "rarity": 3, "roma_id": "yu", "dan_id": "u_dan", "gyo_id": "ya_gyo" },
  // 漢字: 登
  "kan_tou12": { "display_char": "登", "rarity": 3, "roma_id": "tou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_to9": { "display_char": "登", "rarity": 3, "roma_id": "to", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_dou3": { "display_char": "登", "rarity": 3, "roma_id": "dou", "dan_id": "o_dan", "gyo_id": "da_gyo" }, // 同(dou), 道(dou)と競合
  "kan_nobo2": { "display_char": "登", "rarity": 3, "roma_id": "nobo", "dan_id": "o_dan", "gyo_id": "na_gyo" }, // 上(nobo)と競合
  // 漢字: 等
  "kan_tou13": { "display_char": "等", "rarity": 3, "roma_id": "tou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_hito3": { "display_char": "等", "rarity": 3, "roma_id": "hito", "dan_id": "o_dan", "gyo_id": "ha_gyo" }, // 一(hito), 人(hito)と競合
  // 漢字: 動
  "kan_dou4": { "display_char": "動", "rarity": 3, "roma_id": "dou", "dan_id": "o_dan", "gyo_id": "da_gyo" }, // 同, 道, 登 と競合
  "kan_ugo": { "display_char": "動", "rarity": 3, "roma_id": "ugo", "dan_id": "o_dan", "gyo_id": "u_gyo" }, //
  // 漢字: 童
  "kan_dou5": { "display_char": "童", "rarity": 3, "roma_id": "dou", "dan_id": "o_dan", "gyo_id": "da_gyo" }, // ...競合
  "kan_warabe": { "display_char": "童", "rarity": 3, "roma_id": "warabe", "dan_id": "e_dan", "gyo_id": "wa_gyo" },
  // 漢字: 農
  "kan_nou2": { "display_char": "農", "rarity": 3, "roma_id": "nou", "dan_id": "o_dan", "gyo_id": "na_gyo" }, // 王(nou)と競合
  // 漢字: 波
  "kan_ha6": { "display_char": "波", "rarity": 3, "roma_id": "ha", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // 生, 羽, 晴, 歯 と競合
  "kan_nami": { "display_char": "波", "rarity": 3, "roma_id": "nami", "dan_id": "i_dan", "gyo_id": "na_gyo" },
  // 漢字: 配
  "kan_hai2": { "display_char": "配", "rarity": 3, "roma_id": "hai", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // 入(hai)と競合
  "kan_kuba": { "display_char": "配", "rarity": 3, "roma_id": "kuba", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 倍
  "kan_bai4": { "display_char": "倍", "rarity": 3, "roma_id": "bai", "dan_id": "a_dan", "gyo_id": "ba_gyo" }, // 貝, 売, 買 と競合
  // 漢字: 箱
  "kan_sou6": { "display_char": "箱", "rarity": 3, "roma_id": "sou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 草, 走, 相, 送, 想 と競合
  "kan_hako2": { "display_char": "箱", "rarity": 3, "roma_id": "hako", "dan_id": "o_dan", "gyo_id": "ha_gyo" }, // 運(hako)と競合
  // 漢字: 畑
  "kan_hata": { "display_char": "畑", "rarity": 3, "roma_id": "hata", "dan_id": "a_dan", "gyo_id": "ha_gyo" },
  // 漢字: 発
  "kan_hatsu": { "display_char": "発", "rarity": 3, "roma_id": "hatsu", "dan_id": "u_dan", "gyo_id": "ha_gyo" },
  "kan_hotsu": { "display_char": "発", "rarity": 3, "roma_id": "hotsu", "dan_id": "u_dan", "gyo_id": "ha_gyo" },
  "kan_a8": { "display_char": "発", "rarity": 3, "roma_id": "a", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_tatsu2": { "display_char": "発", "rarity": 3, "roma_id": "tatsu", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // 立(tatsu)と競合
  // 漢字: 反
  "kan_han2": { "display_char": "反", "rarity": 3, "roma_id": "han", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // 半(han)と競合
  "kan_hon2": { "display_char": "反", "rarity": 3, "roma_id": "hon", "dan_id": "o_dan", "gyo_id": "ha_gyo" }, // 本(hon)と競合
  "kan_tan3": { "display_char": "反", "rarity": 3, "roma_id": "tan", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // 炭(tan), 短(tan)と競合
  "kan_so2": { "display_char": "反", "rarity": 3, "roma_id": "so", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 組(so)と競合
  // 漢字: 板
  "kan_han3": { "display_char": "板", "rarity": 3, "roma_id": "han", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // 半(han), 反(han)と競合
  "kan_ban3": { "display_char": "板", "rarity": 3, "roma_id": "ban", "dan_id": "a_dan", "gyo_id": "ba_gyo" }, // 万(ban), 番(ban)と競合
  "kan_ita": { "display_char": "板", "rarity": 3, "roma_id": "ita", "dan_id": "a_dan", "gyo_id": "i_gyo" }, //
  // 漢字: 皮
  "kan_hi4": { "display_char": "皮", "rarity": 3, "roma_id": "hi", "dan_id": "i_dan", "gyo_id": "ha_gyo" }, // 日, 火, 引 と競合
  "kan_kawa3": { "display_char": "皮", "rarity": 3, "roma_id": "kawa", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 川(kawa), 交(kawa)と競合
  // 漢字: 悲
  "kan_hi5": { "display_char": "悲", "rarity": 3, "roma_id": "hi", "dan_id": "i_dan", "gyo_id": "ha_gyo" }, // ...競合
  "kan_kana": { "display_char": "悲", "rarity": 3, "roma_id": "kana", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 美
  "kan_bi2": { "display_char": "美", "rarity": 3, "roma_id": "bi", "dan_id": "i_dan", "gyo_id": "ba_gyo" }, // 火(bi)と競合
  "kan_utsuku": { "display_char": "美", "rarity": 3, "roma_id": "utsuku", "dan_id": "u_dan", "gyo_id": "u_gyo" }, //
  // 漢字: 鼻
  "kan_bi3": { "display_char": "鼻", "rarity": 3, "roma_id": "bi", "dan_id": "i_dan", "gyo_id": "ba_gyo" }, // 火(bi), 美(bi)と競合
  "kan_hana3": { "display_char": "鼻", "rarity": 3, "roma_id": "hana", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // 花(hana), 話(hana)と競合
  // 漢字: 筆
  "kan_hitsu": { "display_char": "筆", "rarity": 3, "roma_id": "hitsu", "dan_id": "i_dan", "gyo_id": "ha_gyo" },
  "kan_fude": { "display_char": "筆", "rarity": 3, "roma_id": "fude", "dan_id": "e_dan", "gyo_id": "ha_gyo" },
  // 漢字: 氷
  "kan_hyou": { "display_char": "氷", "rarity": 3, "roma_id": "hyou", "dan_id": "o_dan", "gyo_id": "ha_gyo" },
  "kan_koori": { "display_char": "氷", "rarity": 3, "roma_id": "koori", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  "kan_hi6": { "display_char": "氷", "rarity": 3, "roma_id": "hi", "dan_id": "i_dan", "gyo_id": "ha_gyo" }, // ...競合
  // 漢字: 表
  "kan_hyou2": { "display_char": "表", "rarity": 3, "roma_id": "hyou", "dan_id": "o_dan", "gyo_id": "ha_gyo" }, // 氷(hyou)と競合
  "kan_omote": { "display_char": "表", "rarity": 3, "roma_id": "omote", "dan_id": "e_dan", "gyo_id": "o_gyo" }, //
  "kan_arawa": { "display_char": "表", "rarity": 3, "roma_id": "arawa", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  // 漢字: 秒
  "kan_byou": { "display_char": "秒", "rarity": 3, "roma_id": "byou", "dan_id": "o_dan", "gyo_id": "ba_gyo" },
  // 漢字: 病
  "kan_byou2": { "display_char": "病", "rarity": 3, "roma_id": "byou", "dan_id": "o_dan", "gyo_id": "ba_gyo" }, // 秒(byou)と競合
  "kan_hei": { "display_char": "病", "rarity": 3, "roma_id": "hei", "dan_id": "e_dan", "gyo_id": "ha_gyo" },
  "kan_ya": { "display_char": "病", "rarity": 3, "roma_id": "ya", "dan_id": "a_dan", "gyo_id": "ya_gyo" }, // 非常に多くの競合あり
  // 漢字: 品
  "kan_hin": { "display_char": "品", "rarity": 3, "roma_id": "hin", "dan_id": "i_dan", "gyo_id": "ha_gyo" },
  "kan_hon3": { "display_char": "品", "rarity": 3, "roma_id": "hon", "dan_id": "o_dan", "gyo_id": "ha_gyo" }, // 本(hon), 反(hon)と競合
  "kan_shina": { "display_char": "品", "rarity": 3, "roma_id": "shina", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  // 漢字: 部
  "kan_bu3": { "display_char": "部", "rarity": 3, "roma_id": "bu", "dan_id": "u_dan", "gyo_id": "ba_gyo" }, // 分(bu), 歩(bu)と競合
  "kan_be": { "display_char": "部", "rarity": 3, "roma_id": "be", "dan_id": "e_dan", "gyo_id": "ba_gyo" },
  // 漢字: 服
  "kan_fuku": { "display_char": "服", "rarity": 3, "roma_id": "fuku", "dan_id": "u_dan", "gyo_id": "ha_gyo" },
  // 漢字: 福
  "kan_fuku2": { "display_char": "福", "rarity": 3, "roma_id": "fuku", "dan_id": "u_dan", "gyo_id": "ha_gyo" }, // 服(fuku)と競合
  // 漢字: 物
  "kan_butsu": { "display_char": "物", "rarity": 3, "roma_id": "butsu", "dan_id": "u_dan", "gyo_id": "ba_gyo" },
  "kan_motsu": { "display_char": "物", "rarity": 3, "roma_id": "motsu", "dan_id": "o_dan", "gyo_id": "ma_gyo" },
  "kan_mono2": { "display_char": "物", "rarity": 3, "roma_id": "mono", "dan_id": "o_dan", "gyo_id": "ma_gyo" }, // 者(mono)と競合
  // 漢字: 平
  "kan_hei2": { "display_char": "平", "rarity": 3, "roma_id": "hei", "dan_id": "e_dan", "gyo_id": "ha_gyo" }, // 病(hei)と競合
  "kan_byou3": { "display_char": "平", "rarity": 3, "roma_id": "byou", "dan_id": "o_dan", "gyo_id": "ba_gyo" }, // 秒(byou), 病(byou)と競合
  "kan_taira": { "display_char": "平", "rarity": 3, "roma_id": "taira", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  "kan_hira2": { "display_char": "平", "rarity": 3, "roma_id": "hira", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // 開(hira)と競合
  // 漢字: 返
  "kan_hen": { "display_char": "返", "rarity": 3, "roma_id": "hen", "dan_id": "e_dan", "gyo_id": "ha_gyo" },
  "kan_kae2": { "display_char": "返", "rarity": 3, "roma_id": "kae", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 帰(kae)と競合
  // 漢字: 勉
  "kan_ben": { "display_char": "勉", "rarity": 3, "roma_id": "ben", "dan_id": "e_dan", "gyo_id": "ba_gyo" },
  "kan_tsuto": { "display_char": "勉", "rarity": 3, "roma_id": "tsuto", "dan_id": "o_dan", "gyo_id": "ta_gyo" },
  // 漢字: 放
  "kan_hou2": { "display_char": "放", "rarity": 3, "roma_id": "hou", "dan_id": "o_dan", "gyo_id": "ha_gyo" }, // 方(hou)と競合
  "kan_hana": { "display_char": "放", "rarity": 3, "roma_id": "hana", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // 多くの競合あり
  "kan_hou": { "display_char": "放", "rarity": 3, "roma_id": "hou", "dan_id": "o_dan", "gyo_id": "ha_gyo" }, // 競合
  // 漢字: 味
  "kan_mi7": { "display_char": "味", "rarity": 3, "roma_id": "mi", "dan_id": "i_dan", "gyo_id": "ma_gyo" }, // ...競合
  "kan_aji": { "display_char": "味", "rarity": 3, "roma_id": "aji", "dan_id": "i_dan", "gyo_id": "a_gyo" },
  // 漢字: 命
  "kan_mei4": { "display_char": "命", "rarity": 3, "roma_id": "mei", "dan_id": "e_dan", "gyo_id": "ma_gyo" }, // 名, 明, 鳴 と競合
  "kan_myou3": { "display_char": "命", "rarity": 3, "roma_id": "myou", "dan_id": "o_dan", "gyo_id": "ma_gyo" }, // 名(myou), 明(myou)と競合
  "kan_inochi": { "display_char": "命", "rarity": 3, "roma_id": "inochi", "dan_id": "i_dan", "gyo_id": "i_gyo" }, //
  // 漢字: 面
  "kan_men": { "display_char": "面", "rarity": 3, "roma_id": "men", "dan_id": "e_dan", "gyo_id": "ma_gyo" },
  "kan_ben2": { "display_char": "面", "rarity": 3, "roma_id": "ben", "dan_id": "e_dan", "gyo_id": "ba_gyo" }, // 勉(ben)と競合
  "kan_omote2": { "display_char": "面", "rarity": 3, "roma_id": "omote", "dan_id": "e_dan", "gyo_id": "o_gyo" }, // 表(omote)と競合
  "kan_omo4": { "display_char": "面", "rarity": 3, "roma_id": "omo", "dan_id": "o_dan", "gyo_id": "o_gyo" }, // 思, 主, 重, 想 と競合
  "kan_tsura": { "display_char": "面", "rarity": 3, "roma_id": "tsura", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  // 漢字: 問
  "kan_mon3": { "display_char": "問", "rarity": 3, "roma_id": "mon", "dan_id": "o_dan", "gyo_id": "ma_gyo" }, // 文(mon), 聞(mon)と競合
  "kan_to10": { "display_char": "問", "rarity": 3, "roma_id": "to", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  
  // --- 15. 漢字 (小学3年生・パート5/5) ---
  // Rarity: 3
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 薬
  "kan_yaku": { "display_char": "薬", "rarity": 3, "roma_id": "yaku", "dan_id": "u_dan", "gyo_id": "ya_gyo" },
  "kan_kusuri": { "display_char": "薬", "rarity": 3, "roma_id": "kusuri", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  // 漢字: 由
  "kan_yuu3": { "display_char": "由", "rarity": 3, "roma_id": "yuu", "dan_id": "u_dan", "gyo_id": "ya_gyo" }, // 右, 友 と競合
  "kan_yu2": { "display_char": "由", "rarity": 3, "roma_id": "yu", "dan_id": "u_dan", "gyo_id": "ya_gyo" }, // 行(yu)と競合
  "kan_yui": { "display_char": "由", "rarity": 3, "roma_id": "yui", "dan_id": "i_dan", "gyo_id": "ya_gyo" },
  "kan_yoshi": { "display_char": "由", "rarity": 3, "roma_id": "yoshi", "dan_id": "i_dan", "gyo_id": "ya_gyo" },
  // 漢字: 油
  "kan_yuu4": { "display_char": "油", "rarity": 3, "roma_id": "yuu", "dan_id": "u_dan", "gyo_id": "ya_gyo" }, // 右, 友, 由 と競合
  "kan_yu3": { "display_char": "油", "rarity": 3, "roma_id": "yu", "dan_id": "u_dan", "gyo_id": "ya_gyo" }, // 行(yu), 由(yu)と競合
  "kan_abura": { "display_char": "油", "rarity": 3, "roma_id": "abura", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  // 漢字: 有
  "kan_yuu5": { "display_char": "有", "rarity": 3, "roma_id": "yuu", "dan_id": "u_dan", "gyo_id": "ya_gyo" }, // ...競合
  "kan_u9": { "display_char": "有", "rarity": 3, "roma_id": "u", "dan_id": "u_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_a9": { "display_char": "有", "rarity": 3, "roma_id": "a", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 遊
  "kan_yuu6": { "display_char": "遊", "rarity": 3, "roma_id": "yuu", "dan_id": "u_dan", "gyo_id": "ya_gyo" }, // ...競合
  "kan_yu4": { "display_char": "遊", "rarity": 3, "roma_id": "yu", "dan_id": "u_dan", "gyo_id": "ya_gyo" }, // ...競合
  "kan_aso": { "display_char": "遊", "rarity": 3, "roma_id": "aso", "dan_id": "o_dan", "gyo_id": "a_gyo" },
  // 漢字: 予
  "kan_yo8": { "display_char": "予", "rarity": 3, "roma_id": "yo", "dan_id": "o_dan", "gyo_id": "ya_gyo" }, // 四, 読, 夜, 世, 代 と競合
  "kan_araka": { "display_char": "予", "rarity": 3, "roma_id": "araka", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  // 漢字: 羊
  "kan_you4": { "display_char": "羊", "rarity": 3, "roma_id": "you", "dan_id": "o_dan", "gyo_id": "ya_gyo" }, // 八(you), 用(you), 曜(you)と競合
  "kan_hitsuji": { "display_char": "羊", "rarity": 3, "roma_id": "hitsuji", "dan_id": "i_dan", "gyo_id": "ha_gyo" },
  // 漢字: 洋
  "kan_you5": { "display_char": "洋", "rarity": 3, "roma_id": "you", "dan_id": "o_dan", "gyo_id": "ya_gyo" }, // ...競合
  // 漢字: 葉
  "kan_you6": { "display_char": "葉", "rarity": 3, "roma_id": "you", "dan_id": "o_dan", "gyo_id": "ya_gyo" }, // ...競合
  "kan_ha7": { "display_char": "葉", "rarity": 3, "roma_id": "ha", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // ...競合
  // 漢字: 陽
  "kan_you7": { "display_char": "陽", "rarity": 3, "roma_id": "you", "dan_id": "o_dan", "gyo_id": "ya_gyo" }, // ...競合
  "kan_hi7": { "display_char": "陽", "rarity": 3, "roma_id": "hi", "dan_id": "i_dan", "gyo_id": "ha_gyo" }, // ...競合
  // 漢字: 様
  "kan_you8": { "display_char": "様", "rarity": 3, "roma_id": "you", "dan_id": "o_dan", "gyo_id": "ya_gyo" }, // ...競合
  "kan_shou15": { "display_char": "様", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_sama": { "display_char": "様", "rarity": 3, "roma_id": "sama", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  // 漢字: 落
  "kan_raku2": { "display_char": "落", "rarity": 3, "roma_id": "raku", "dan_id": "u_dan", "gyo_id": "ra_gyo" }, // 楽(raku)と競合
  "kan_o6": { "display_char": "落", "rarity": 3, "roma_id": "o", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 流
  "kan_ryuu2": { "display_char": "流", "rarity": 3, "roma_id": "ryuu", "dan_id": "u_dan", "gyo_id": "ra_gyo" }, // 竜(ryuu), 立(ryuu)と競合
  "kan_ru": { "display_char": "流", "rarity": 3, "roma_id": "ru", "dan_id": "u_dan", "gyo_id": "ra_gyo" },
  "kan_naga2": { "display_char": "流", "rarity": 3, "roma_id": "naga", "dan_id": "a_dan", "gyo_id": "na_gyo" }, // 長(naga)と競合
  // 漢字: 旅
  "kan_ryo": { "display_char": "旅", "rarity": 3, "roma_id": "ryo", "dan_id": "o_dan", "gyo_id": "ra_gyo" },
  "kan_tabi2": { "display_char": "旅", "rarity": 3, "roma_id": "tabi", "dan_id": "i_dan", "gyo_id": "ta_gyo" }, // 度(tabi)と競合
  // 漢字: 両
  "kan_ryou": { "display_char": "両", "rarity": 3, "roma_id": "ryou", "dan_id": "o_dan", "gyo_id": "ra_gyo" },
  "kan_teru": { "display_char": "両", "rarity": 3, "roma_id": "teru", "dan_id": "u_dan", "gyo_id": "ta_gyo" },
  "kan_futa2": { "display_char": "両", "rarity": 3, "roma_id": "futa", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // 二(futa)と競合
  // 漢字: 緑
  "kan_ryoku2": { "display_char": "緑", "rarity": 3, "roma_id": "ryoku", "dan_id": "u_dan", "gyo_id": "ra_gyo" }, // 力(ryoku)と競合
  "kan_roku2": { "display_char": "緑", "rarity": 3, "roma_id": "roku", "dan_id": "u_dan", "gyo_id": "ra_gyo" }, // 六(roku)と競合
  "kan_midori": { "display_char": "緑", "rarity": 3, "roma_id": "midori", "dan_id": "i_dan", "gyo_id": "ma_gyo" },
  // 漢字: 礼
  "kan_rei": { "display_char": "礼", "rarity": 3, "roma_id": "rei", "dan_id": "e_dan", "gyo_id": "ra_gyo" },
  "kan_rai2": { "display_char": "礼", "rarity": 3, "roma_id": "rai", "dan_id": "a_dan", "gyo_id": "ra_gyo" }, // 来(rai)と競合
  // 漢字: 列
  "kan_retsu": { "display_char": "列", "rarity": 3, "roma_id": "retsu", "dan_id": "e_dan", "gyo_id": "ra_gyo" },
  "kan_re": { "display_char": "列", "rarity": 3, "roma_id": "re", "dan_id": "e_dan", "gyo_id": "ra_gyo" },
  // 漢字: 練
  "kan_ren": { "display_char": "練", "rarity": 3, "roma_id": "ren", "dan_id": "e_dan", "gyo_id": "ra_gyo" },
  "kan_ne3": { "display_char": "練", "rarity": 3, "roma_id": "ne", "dan_id": "e_dan", "gyo_id": "na_gyo" }, // 音(ne), 根(ne)と競合
  // 漢字: 路
  "kan_ro": { "display_char": "路", "rarity": 3, "roma_id": "ro", "dan_id": "o_dan", "gyo_id": "ra_gyo" },
  "kan_ru2": { "display_char": "路", "rarity": 3, "roma_id": "ru", "dan_id": "u_dan", "gyo_id": "ra_gyo" }, // 流(ru)と競合
  "kan_ji12": { "display_char": "路", "rarity": 3, "roma_id": "ji", "dan_id": "i_dan", "gyo_id": "za_gyo" }, // ...競合
  // 漢字: 和
  "kan_wa4": { "display_char": "和", "rarity": 3, "roma_id": "wa", "dan_id": "a_dan", "gyo_id": "wa_gyo" }, // 羽, 分, 話 と競合
  "kan_o7": { "display_char": "和", "rarity": 3, "roma_id": "o", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_yawa": { "display_char": "和", "rarity": 3, "roma_id": "yawa", "dan_id": "a_dan", "gyo_id": "ya_gyo" },
  "kan_nago": { "display_char": "和", "rarity": 3, "roma_id": "nago", "dan_id": "o_dan", "gyo_id": "na_gyo" },

  // --- 16. 漢字 (小学4年生・パート1/5) ---
  // Rarity: 3
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 愛
  "kan_ai2": { "display_char": "愛", "rarity": 3, "roma_id": "ai", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // 相(ai)と競合
  "kan_ito": { "display_char": "愛", "rarity": 3, "roma_id": "ito", "dan_id": "o_dan", "gyo_id": "i_gyo" }, //
  // 漢字: 案
  "kan_an4": { "display_char": "案", "rarity": 3, "roma_id": "an", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // 行, 安, 暗 と競合
  "kan_tsuku": { "display_char": "案", "rarity": 3, "roma_id": "tsuku", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // (作)
  // 漢字: 以
  "kan_i7": { "display_char": "以", "rarity": 3, "roma_id": "i", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_mo": { "display_char": "以", "rarity": 3, "roma_id": "mo", "dan_id": "o_dan", "gyo_id": "ma_gyo" }, // (持)
  // 漢字: 衣
  "kan_i8": { "display_char": "衣", "rarity": 3, "roma_id": "i", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_e4": { "display_char": "衣", "rarity": 3, "roma_id": "e", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // 回, 会, 絵 と競合
  "kan_koromo": { "display_char": "衣", "rarity": 3, "roma_id": "koromo", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  // 漢字: 位
  "kan_i9": { "display_char": "位", "rarity": 3, "roma_id": "i", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_kurai": { "display_char": "位", "rarity": 3, "roma_id": "kurai", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  // 漢字: 囲
  "kan_i10": { "display_char": "囲", "rarity": 3, "roma_id": "i", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_kako": { "display_char": "囲", "rarity": 3, "roma_id": "kako", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  // 漢字: 胃
  "kan_i11": { "display_char": "胃", "rarity": 3, "roma_id": "i", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 印
  "kan_in6": { "display_char": "印", "rarity": 3, "roma_id": "in", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // 音, 引, 員, 院, 飲 と競合
  "kan_shirushi": { "display_char": "印", "rarity": 3, "roma_id": "shirushi", "dan_id": "i_dan", "gyo_id": "sa_gyo" },
  // 漢字: 英
  "kan_ei2": { "display_char": "英", "rarity": 3, "roma_id": "ei", "dan_id": "e_dan", "gyo_id": "e_gyo" }, // 泳(ei)と競合
  "kan_hanabusa": { "display_char": "英", "rarity": 3, "roma_id": "hanabusa", "dan_id": "a_dan", "gyo_id": "ha_gyo" },
  // 漢字: 栄
  "kan_ei3": { "display_char": "栄", "rarity": 3, "roma_id": "ei", "dan_id": "e_dan", "gyo_id": "e_gyo" }, // 泳(ei), 英(ei)と競合
  "kan_sakae": { "display_char": "栄", "rarity": 3, "roma_id": "sakae", "dan_id": "e_dan", "gyo_id": "sa_gyo" },
  "kan_ha8": { "display_char": "栄", "rarity": 3, "roma_id": "ha", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // ...競合
  // 漢字: 塩
  "kan_en4": { "display_char": "塩", "rarity": 3, "roma_id": "en", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // 円, 園, 遠 と競合
  "kan_shio": { "display_char": "塩", "rarity": 3, "roma_id": "shio", "dan_id": "o_dan", "gyo_id": "sa_gyo" },
  // 漢字: 億
  "kan_oku4": { "display_char": "億", "rarity": 3, "roma_id": "oku", "dan_id": "u_dan", "gyo_id": "o_gyo" }, // 後, 屋, 送 と競合
  // 漢字: 加
  "kan_ka": { "display_char": "加", "rarity": 3, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 非常に多くの競合あり
  "kan_kuwa": { "display_char": "加", "rarity": 3, "roma_id": "kuwa", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 果
  "kan_ka15": { "display_char": "果", "rarity": 3, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ha": { "display_char": "果", "rarity": 3, "roma_id": "ha", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // ...競合
  // 漢字: 貨
  "kan_ka16": { "display_char": "貨", "rarity": 3, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_takara": { "display_char": "貨", "rarity": 3, "roma_id": "takara", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  // 漢字: 課
  "kan_ka17": { "display_char": "課", "rarity": 3, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 芽
  "kan_ga2": { "display_char": "芽", "rarity": 3, "roma_id": "ga", "dan_id": "a_dan", "gyo_id": "ga_gyo" }, // 画(ga)と競合
  "kan_me3": { "display_char": "芽", "rarity": 3, "roma_id": "me", "dan_id": "e_dan", "gyo_id": "ma_gyo" }, // 目(me), 女(me)と競合
  // 漢字: 改
  "kan_kai9": { "display_char": "改", "rarity": 3, "roma_id": "kai", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_arata": { "display_char": "改", "rarity": 3, "roma_id": "arata", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  // 漢字: 械
  "kan_kai10": { "display_char": "械", "rarity": 3, "roma_id": "kai", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kase": { "display_char": "械", "rarity": 3, "roma_id": "kase", "dan_id": "e_dan", "gyo_id": "ka_gyo" },
  // 漢字: 害
  "kan_gai2": { "display_char": "害", "rarity": 3, "roma_id": "gai", "dan_id": "a_dan", "gyo_id": "ga_gyo" }, // 外(gai)と競合
  // 漢字: 各
  "kan_kaku4": { "display_char": "各", "rarity": 3, "roma_id": "kaku", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 画, 角, 客 と競合
  "kan_onoono": { "display_char": "各", "rarity": 3, "roma_id": "onoono", "dan_id": "o_dan", "gyo_id": "o_gyo" }, //
  // 漢字: 覚
  "kan_kaku5": { "display_char": "覚", "rarity": 3, "roma_id": "kaku", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_obo": { "display_char": "覚", "rarity": 3, "roma_id": "obo", "dan_id": "o_dan", "gyo_id": "o_gyo" }, //
  "kan_sa": { "display_char": "覚", "rarity": 3, "roma_id": "sa", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // 非常に多くの競合あり
  // 漢字: 完
  "kan_kan6": { "display_char": "完", "rarity": 3, "roma_id": "kan", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 管
  "kan_kan7": { "display_char": "管", "rarity": 3, "roma_id": "kan", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kuda2": { "display_char": "管", "rarity": 3, "roma_id": "kuda", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 下(kuda)と競合
  // 漢字: 関
  "kan_kan8": { "display_char": "関", "rarity": 3, "roma_id": "kan", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_seki4": { "display_char": "関", "rarity": 3, "roma_id": "seki", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // 赤, 石, 昔 と競合
  "kan_kaka2": { "display_char": "関", "rarity": 3, "roma_id": "kaka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 係(kaka)と競合
  // 漢字: 感
  // (小学3年生で既に出力済み)
  // 漢字: 願
  "kan_gan6": { "display_char": "願", "rarity": 3, "roma_id": "gan", "dan_id": "a_dan", "gyo_id": "ga_gyo" }, // 丸, 岩, 顔, 元, 岸 と競合
  "kan_nega": { "display_char": "願", "rarity": 3, "roma_id": "nega", "dan_id": "a_dan", "gyo_id": "na_gyo" },
  // 漢字: 希
  "kan_ki15": { "display_char": "希", "rarity": 3, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ke3": { "display_char": "希", "rarity": 3, "roma_id": "ke", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 気, 家, 毛, 化, 消 と競合
  "kan_mare": { "display_char": "希", "rarity": 3, "roma_id": "mare", "dan_id": "e_dan", "gyo_id": "ma_gyo" },
  // 漢字: 季
  "kan_ki16": { "display_char": "季", "rarity": 3, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 紀
  "kan_ki17": { "display_char": "紀", "rarity": 3, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 喜
  "kan_ki18": { "display_char": "喜", "rarity": 3, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_yoroko": { "display_char": "喜", "rarity": 3, "roma_id": "yoroko", "dan_id": "o_dan", "gyo_id": "ya_gyo" },
  // 漢字: 器
  "kan_ki19": { "display_char": "器", "rarity": 3, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_utsuwa": { "display_char": "器", "rarity": 3, "roma_id": "utsuwa", "dan_id": "a_dan", "gyo_id": "u_gyo" }, //
  // 漢字: 議
  "kan_gi": { "display_char": "議", "rarity": 3, "roma_id": "gi", "dan_id": "i_dan", "gyo_id": "ga_gyo" },
  // 漢字: 求
  "kan_kyuu9": { "display_char": "求", "rarity": 3, "roma_id": "kyuu", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 九, 休, 弓, 究, 急, 級, 宮, 球 と競合
  "kan_gu2": { "display_char": "求", "rarity": 3, "roma_id": "gu", "dan_id": "u_dan", "gyo_id": "ga_gyo" }, // 具(gu)と競合
  "kan_moto4": { "display_char": "求", "rarity": 3, "roma_id": "moto", "dan_id": "o_dan", "gyo_id": "ma_gyo" }, // 下, 本, 元 と競合
  // 漢字: 泣
  "kan_kyuu10": { "display_char": "泣", "rarity": 3, "roma_id": "kyuu", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_na": { "display_char": "泣", "rarity": 3, "roma_id": "na", "dan_id": "a_dan", "gyo_id": "na_gyo" }, // 多くの競合あり
  // 漢字: 球
  // (小学3年生で既に出力済み)
  // 漢字: 去
  // (小学3年生で既に出力済み)
  // 漢字: 居
  "kan_kyo2": { "display_char": "居", "rarity": 3, "roma_id": "kyo", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 去(kyo)と競合
  "kan_ko8": { "display_char": "居", "rarity": 3, "roma_id": "ko", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_i12": { "display_char": "居", "rarity": 3, "roma_id": "i", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 許
  "kan_kyo3": { "display_char": "許", "rarity": 3, "roma_id": "kyo", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 去(kyo), 居(kyo)と競合
  "kan_yuru": { "display_char": "許", "rarity": 3, "roma_id": "yuru", "dan_id": "u_dan", "gyo_id": "ya_gyo" },
  "kan_moto5": { "display_char": "許", "rarity": 3, "roma_id": "moto", "dan_id": "o_dan", "gyo_id": "ma_gyo" }, // 下, 本, 元, 求 と競合

  // --- 16. 漢字 (小学4年生・パート2/5) ---
  // Rarity: 3
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 境
  "kan_kyou8": { "display_char": "境", "rarity": 3, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kei7": { "display_char": "境", "rarity": 3, "roma_id": "kei", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_sakai": { "display_char": "境", "rarity": 3, "roma_id": "sakai", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  // 漢字: 胸
  "kan_kyou9": { "display_char": "胸", "rarity": 3, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_mune": { "display_char": "胸", "rarity": 3, "roma_id": "mune", "dan_id": "e_dan", "gyo_id": "ma_gyo" },
  "kan_muna": { "display_char": "胸", "rarity": 3, "roma_id": "muna", "dan_id": "a_dan", "gyo_id": "ma_gyo" },
  // 漢字: 筋
  "kan_kin4": { "display_char": "筋", "rarity": 3, "roma_id": "kin", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // 金, 近, 今 と競合
  "kan_suji": { "display_char": "筋", "rarity": 3, "roma_id": "suji", "dan_id": "i_dan", "gyo_id": "sa_gyo" },
  // 漢字: 群
  "kan_gun": { "display_char": "群", "rarity": 3, "roma_id": "gun", "dan_id": "u_dan", "gyo_id": "ga_gyo" },
  "kan_mu4": { "display_char": "群", "rarity": 3, "roma_id": "mu", "dan_id": "u_dan", "gyo_id": "ma_gyo" }, // 六(mu), 向(mu)と競合
  "kan_mura2": { "display_char": "群", "rarity": 3, "roma_id": "mura", "dan_id": "a_dan", "gyo_id": "ma_gyo" }, // 村(mura)と競合
  // 漢字: 径
  "kan_kei8": { "display_char": "径", "rarity": 3, "roma_id": "kei", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_michi2": { "display_char": "径", "rarity": 3, "roma_id": "michi", "dan_id": "i_dan", "gyo_id": "ma_gyo" }, // 道(michi)と競合
  // 漢字: 型
  "kan_kei9": { "display_char": "型", "rarity": 3, "roma_id": "kei", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kata3": { "display_char": "型", "rarity": 3, "roma_id": "kata", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 形(kata), 語(kata), 方(kata)と競合
  // 漢字: 景
  "kan_kei10": { "display_char": "景", "rarity": 3, "roma_id": "kei", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 芸
  "kan_gei": { "display_char": "芸", "rarity": 3, "roma_id": "gei", "dan_id": "e_dan", "gyo_id": "ga_gyo" },
  "kan_un2": { "display_char": "芸", "rarity": 3, "roma_id": "un", "dan_id": "u_dan", "gyo_id": "u_gyo" }, // 雲(un), 運(un)と競合
  "kan_waza2": { "display_char": "芸", "rarity": 3, "roma_id": "waza", "dan_id": "a_dan", "gyo_id": "wa_gyo" }, // 業(waza)と競合
  // 漢字: 欠
  "kan_ketsu3": { "display_char": "欠", "rarity": 3, "roma_id": "ketsu", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 血(ketsu), 決(ketsu)と競合
  "kan_ken7": { "display_char": "欠", "rarity": 3, "roma_id": "ken", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ka18": { "display_char": "欠", "rarity": 3, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 結
  "kan_ketsu4": { "display_char": "結", "rarity": 3, "roma_id": "ketsu", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_musu": { "display_char": "結", "rarity": 3, "roma_id": "musu", "dan_id": "u_dan", "gyo_id": "ma_gyo" },
  "kan_yu5": { "display_char": "結", "rarity": 3, "roma_id": "yu", "dan_id": "u_dan", "gyo_id": "ya_gyo" }, // ...競合
  // 漢字: 建
  "kan_ken8": { "display_char": "建", "rarity": 3, "roma_id": "ken", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kon5": { "display_char": "建", "rarity": 3, "roma_id": "kon", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 金, 近, 今, 根 と競合
  "kan_ta9": { "display_char": "建", "rarity": 3, "roma_id": "ta", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // ...競合
  // 漢字: 健
  "kan_ken9": { "display_char": "健", "rarity": 3, "roma_id": "ken", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_suko2": { "display_char": "健", "rarity": 3, "roma_id": "suko", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 少(suko)と競合
  // 漢字: 験
  "kan_ken10": { "display_char": "験", "rarity": 3, "roma_id": "ken", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_gen4": { "display_char": "験", "rarity": 3, "roma_id": "gen", "dan_id": "e_dan", "gyo_id": "ga_gyo" }, // 元, 言, 原 と競合
  "kan_tame": { "display_char": "験", "rarity": 3, "roma_id": "tame", "dan_id": "e_dan", "gyo_id": "ta_gyo" },
  // 漢字: 限
  "kan_gen5": { "display_char": "限", "rarity": 3, "roma_id": "gen", "dan_id": "e_dan", "gyo_id": "ga_gyo" }, // ...競合
  "kan_kagi": { "display_char": "限", "rarity": 3, "roma_id": "kagi", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  // 漢字: 個
  "kan_ko9": { "display_char": "個", "rarity": 3, "roma_id": "ko", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ka19": { "display_char": "個", "rarity": 3, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 護
  "kan_go6": { "display_char": "護", "rarity": 3, "roma_id": "go", "dan_id": "o_dan", "gyo_id": "ga_gyo" }, // 五, 午, 後, 語, 期 と競合
  "kan_mamo2": { "display_char": "護", "rarity": 3, "roma_id": "mamo", "dan_id": "o_dan", "gyo_id": "ma_gyo" }, // 守(mamo)と競合
  // 漢字: 効
  "kan_kou17": { "display_char": "効", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ki10": { "display_char": "効", "rarity": 3, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 厚
  "kan_kou18": { "display_char": "厚", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_atsu3": { "display_char": "厚", "rarity": 3, "roma_id": "atsu", "dan_id": "u_dan", "gyo_id": "a_gyo" }, // 集(atsu), 暑(atsu)と競合
  // 漢字: 耕
  "kan_kou19": { "display_char": "耕", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_tagaya": { "display_char": "耕", "rarity": 3, "roma_id": "tagaya", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  // 漢字: 鉱
  "kan_kou20": { "display_char": "鉱", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_aragane": { "display_char": "鉱", "rarity": 3, "roma_id": "aragane", "dan_id": "e_dan", "gyo_id": "a_gyo" },
  // 漢字: 構
  "kan_kou21": { "display_char": "構", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kama": { "display_char": "構", "rarity": 3, "roma_id": "kama", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 造
  "kan_zou": { "display_char": "造", "rarity": 3, "roma_id": "zou", "dan_id": "o_dan", "gyo_id": "za_gyo" },
  "kan_tsuku2": { "display_char": "造", "rarity": 3, "roma_id": "tsuku", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // 作(tsuku)と競合
  // 漢字: 香
  "kan_kou22": { "display_char": "香", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kyou10": { "display_char": "香", "rarity": 3, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kaori": { "display_char": "香", "rarity": 3, "roma_id": "kaori", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  "kan_kao2": { "display_char": "香", "rarity": 3, "roma_id": "kao", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 顔(kao)と競合
  // 漢字: 向
  // (小学3年生で既に出力済み)
  // 漢字: 康
  "kan_kou23": { "display_char": "康", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 告
  "kan_koku5": { "display_char": "告", "rarity": 3, "roma_id": "koku", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 石, 谷, 国, 黒 と競合
  "kan_tsu6": { "display_char": "告", "rarity": 3, "roma_id": "tsu", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // ...競合
  // 漢字: 才
  // (小学2年生で既に出力済み)
  // 漢字: 採
  "kan_sai6": { "display_char": "採", "rarity": 3, "roma_id": "sai", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // 西, 才, 細, 切, 祭 と競合
  "kan_to8": { "display_char": "採", "rarity": 3, "roma_id": "to", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  // 漢字: 災
  "kan_sai7": { "display_char": "災", "rarity": 3, "roma_id": "sai", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_wazawa": { "display_char": "災", "rarity": 3, "roma_id": "wazawa", "dan_id": "a_dan", "gyo_id": "wa_gyo" },
  // 漢字: 妻
  "kan_sai8": { "display_char": "妻", "rarity": 3, "roma_id": "sai", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_tsuma": { "display_char": "妻", "rarity": 3, "roma_id": "tsuma", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  // 漢字: 刷
  "kan_satsu": { "display_char": "刷", "rarity": 3, "roma_id": "satsu", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  "kan_su7": { "display_char": "刷", "rarity": 3, "roma_id": "su", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  // 漢字: 察
  "kan_satsu2": { "display_char": "察", "rarity": 3, "roma_id": "satsu", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // 刷(satsu)と競合
  // 漢字: 参
  "kan_san4": { "display_char": "参", "rarity": 3, "roma_id": "san", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // 三, 山, 算 と競合
  "kan_shin11": { "display_char": "参", "rarity": 3, "roma_id": "shin", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_mai3": { "display_char": "参", "rarity": 3, "roma_id": "mai", "dan_id": "a_dan", "gyo_id": "ma_gyo" }, // 米(mai), 毎(mai)と競合
  // 漢字: 産
  "kan_san5": { "display_char": "産", "rarity": 3, "roma_id": "san", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_u10": { "display_char": "産", "rarity": 3, "roma_id": "u", "dan_id": "u_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 残
  "kan_zan": { "display_char": "残", "rarity": 3, "roma_id": "zan", "dan_id": "a_dan", "gyo_id": "za_gyo" },
  "kan_san6": { "display_char": "残", "rarity": 3, "roma_id": "san", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_noko": { "display_char": "残", "rarity": 3, "roma_id": "noko", "dan_id": "o_dan", "gyo_id": "na_gyo" },
  // 漢字: 士
  "kan_shi18": { "display_char": "士", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_samurai": { "display_char": "士", "rarity": 3, "roma_id": "samurai", "dan_id": "i_dan", "gyo_id": "sa_gyo" },
  // 漢字: 氏
  "kan_shi19": { "display_char": "氏", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_uji": { "display_char": "氏", "rarity": 3, "roma_id": "uji", "dan_id": "i_dan", "gyo_id": "u_gyo" }, //
  // 漢字: 史
  "kan_shi20": { "display_char": "史", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  // 漢字: 司
  "kan_shi21": { "display_char": "司", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_tsukasa": { "display_char": "司", "rarity": 3, "roma_id": "tsukasa", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  // 漢字: 試
  "kan_shi22": { "display_char": "試", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_kokoro": { "display_char": "試", "rarity": 3, "roma_id": "kokoro", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // (心)
  "kan_tame2": { "display_char": "試", "rarity": 3, "roma_id": "tame", "dan_id": "e_dan", "gyo_id": "ta_gyo" }, // 験(tame)と競合
  // 漢字:児
  "kan_ji13": { "display_char": "児", "rarity": 3, "roma_id": "ji", "dan_id": "i_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_ni2": { "display_char": "児", "rarity": 3, "roma_id": "ni", "dan_id": "i_dan", "gyo_id": "na_gyo" }, // 二, 荷 と競合
  "kan_gei2": { "display_char": "児", "rarity": 3, "roma_id": "gei", "dan_id": "e_dan", "gyo_id": "ga_gyo" }, // 芸(gei)と競合
  "kan_ko10": { "display_char": "児", "rarity": 3, "roma_id": "ko", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合

  // --- 16. 漢字 (小学4年生・パート3/5) ---
  // Rarity: 3
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 治
  "kan_ji14": { "display_char": "治", "rarity": 3, "roma_id": "ji", "dan_id": "i_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_chi6": { "display_char": "治", "rarity": 3, "roma_id": "chi", "dan_id": "i_dan", "gyo_id": "ta_gyo" }, // 千, 地, 池, 知, 血 と競合
  "kan_osa": { "display_char": "治", "rarity": 3, "roma_id": "osa", "dan_id": "a_dan", "gyo_id": "o_gyo" }, //
  "kan_nao2": { "display_char": "治", "rarity": 3, "roma_id": "nao", "dan_id": "o_dan", "gyo_id": "na_gyo" }, // 直(nao)と競合
  // 漢字: 辞
  "kan_ji15": { "display_char": "辞", "rarity": 3, "roma_id": "ji", "dan_id": "i_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_ya9": { "display_char": "辞", "rarity": 3, "roma_id": "ya", "dan_id": "a_dan", "gyo_id": "ya_gyo" }, // ...競合
  // 漢字: 失
  "kan_shitsu3": { "display_char": "失", "rarity": 3, "roma_id": "shitsu", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // 室(shitsu), 実(shitsu)と競合
  "kan_ushi": { "display_char": "失", "rarity": 3, "roma_id": "ushi", "dan_id": "i_dan", "gyo_id": "u_gyo" }, // 牛(ushi)と競合
  // 漢字: 借
  "kan_shaku4": { "display_char": "借", "rarity": 3, "roma_id": "shaku", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // 赤, 石, 昔 と競合
  "kan_ka": { "display_char": "借", "rarity": 3, "roma_id": "ka", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // 非常に多くの競合あり
  // 漢字: 種
  "kan_shu7": { "display_char": "種", "rarity": 3, "roma_id": "shu", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_tane": { "display_char": "種", "rarity": 3, "roma_id": "tane", "dan_id": "e_dan", "gyo_id": "ta_gyo" },
  // 漢字: 周
  "kan_shuu8": { "display_char": "周", "rarity": 3, "roma_id": "shuu", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // 秋, 週, 州, 拾, 終, 習, 集 と競合
  "kan_mawa2": { "display_char": "周", "rarity": 3, "roma_id": "mawa", "dan_id": "a_dan", "gyo_id": "ma_gyo" }, // 回(mawa)と競合
  // 漢字: 祝
  "kan_shuku2": { "display_char": "祝", "rarity": 3, "roma_id": "shuku", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // 宿(shuku)と競合
  "kan_shuu9": { "display_char": "祝", "rarity": 3, "roma_id": "shuu", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_iwa2": { "display_char": "祝", "rarity": 3, "roma_id": "iwa", "dan_id": "a_dan", "gyo_id": "i_gyo" }, // 岩(iwa)と競合
  // 漢字: 順
  "kan_jun": { "display_char": "順", "rarity": 3, "roma_id": "jun", "dan_id": "u_dan", "gyo_id": "za_gyo" },
  // 漢字: 初
  "kan_sho7": { "display_char": "初", "rarity": 3, "roma_id": "sho", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_haji2": { "display_char": "初", "rarity": 3, "roma_id": "haji", "dan_id": "i_dan", "gyo_id": "ha_gyo" }, // 始(haji)と競合
  "kan_hatsu2": { "display_char": "初", "rarity": 3, "roma_id": "hatsu", "dan_id": "u_dan", "gyo_id": "ha_gyo" }, // 発(hatsu)と競合
  "kan_some": { "display_char": "初", "rarity": 3, "roma_id": "some", "dan_id": "e_dan", "gyo_id": "sa_gyo" },
  // 漢字: 松
  "kan_shou16": { "display_char": "松", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_matsu2": { "display_char": "松", "rarity": 3, "roma_id": "matsu", "dan_id": "u_dan", "gyo_id": "ma_gyo" }, // 祭(matsu)と競合
  // 漢字: 笑
  "kan_shou17": { "display_char": "笑", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_wara": { "display_char": "笑", "rarity": 3, "roma_id": "wara", "dan_id": "a_dan", "gyo_id": "wa_gyo" },
  "kan_e4": { "display_char": "笑", "rarity": 3, "roma_id": "e", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // 回, 会, 絵, 衣 と競合
  // 漢字: 象
  "kan_shou18": { "display_char": "象", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_zou2": { "display_char": "象", "rarity": 3, "roma_id": "zou", "dan_id": "o_dan", "gyo_id": "za_gyo" }, // 造(zou)と競合
  "kan_katado": { "display_char": "象", "rarity": 3, "roma_id": "katado", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  // 漢字: 賞
  "kan_shou19": { "display_char": "賞", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_home": { "display_char": "賞", "rarity": 3, "roma_id": "home", "dan_id": "e_dan", "gyo_id": "ha_gyo" },
  // 漢字: 城
  "kan_jou5": { "display_char": "城", "rarity": 3, "roma_id": "jou", "dan_id": "o_dan", "gyo_id": "za_gyo" }, // 上, 場, 乗, 定 と競合
  "kan_shiro3": { "display_char": "城", "rarity": 3, "roma_id": "shiro", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 白(shiro), 代(shiro)と競合
  // 漢字: 臣
  "kan_shin12": { "display_char": "臣", "rarity": 3, "roma_id": "shin", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_jin3": { "display_char": "臣", "rarity": 3, "roma_id": "jin", "dan_id": "i_dan", "gyo_id": "za_gyo" }, // 人(jin), 神(jin)と競合
  // 漢字: 信
  "kan_shin13": { "display_char": "信", "rarity": 3, "roma_id": "shin", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  // 漢字: 成
  "kan_sei11": { "display_char": "成", "rarity": 3, "roma_id": "sei", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_jou6": { "display_char": "成", "rarity": 3, "roma_id": "jou", "dan_id": "o_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_na4": { "display_char": "成", "rarity": 3, "roma_id": "na", "dan_id": "a_dan", "gyo_id": "na_gyo" }, // 南, 名, 鳴, 泣 と競合
  // 漢字: 省
  "kan_sei12": { "display_char": "省", "rarity": 3, "roma_id": "sei", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_shou20": { "display_char": "省", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_habu": { "display_char": "省", "rarity": 3, "roma_id": "habu", "dan_id": "u_dan", "gyo_id": "ha_gyo" },
  "kan_kaeri": { "display_char": "省", "rarity": 3, "roma_id": "kaeri", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  // 漢字: 清
  "kan_sei13": { "display_char": "清", "rarity": 3, "roma_id": "sei", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_shou21": { "display_char": "清", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_shin14": { "display_char": "清", "rarity": 3, "roma_id": "shin", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_kiyo": { "display_char": "清", "rarity": 3, "roma_id": "kiyo", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  // 漢字: 静
  "kan_sei14": { "display_char": "静", "rarity": 3, "roma_id": "sei", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_jou7": { "display_char": "静", "rarity": 3, "roma_id": "jou", "dan_id": "o_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_shizu": { "display_char": "静", "rarity": 3, "roma_id": "shizu", "dan_id": "u_dan", "gyo_id": "sa_gyo" },
  // 漢字: 席
  "kan_seki5": { "display_char": "席", "rarity": 3, "roma_id": "seki", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // 赤, 石, 昔, 関 と競合
  "kan_mushiro": { "display_char": "席", "rarity": 3, "roma_id": "mushiro", "dan_id": "o_dan", "gyo_id": "ma_gyo" },
  // 漢字: 積
  "kan_seki6": { "display_char": "積", "rarity": 3, "roma_id": "seki", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_shaku5": { "display_char": "積", "rarity": 3, "roma_id": "shaku", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // 赤, 石, 昔, 借 と競合
  "kan_tsu7": { "display_char": "積", "rarity": 3, "roma_id": "tsu", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // ...競合
  // 漢字: 折
  "kan_setsu3": { "display_char": "折", "rarity": 3, "roma_id": "setsu", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // 切(setsu), 雪(setsu)と競合
  "kan_shaku6": { "display_char": "折", "rarity": 3, "roma_id": "shaku", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_o7": { "display_char": "折", "rarity": 3, "roma_id": "o", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_ori": { "display_char": "折", "rarity": 3, "roma_id": "ori", "dan_id": "i_dan", "gyo_id": "o_gyo" }, //
  // 漢字: 節
  "kan_setsu4": { "display_char": "節", "rarity": 3, "roma_id": "setsu", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_sechi": { "display_char": "節", "rarity": 3, "roma_id": "sechi", "dan_id": "i_dan", "gyo_id": "sa_gyo" },
  "kan_fushi": { "display_char": "節", "rarity": 3, "roma_id": "fushi", "dan_id": "i_dan", "gyo_id": "ha_gyo" },
  // 漢字: 説
  "kan_setsu5": { "display_char": "説", "rarity": 3, "roma_id": "setsu", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_zei": { "display_char": "説", "rarity": 3, "roma_id": "zei", "dan_id": "e_dan", "gyo_id": "za_gyo" },
  "kan_to11": { "display_char": "説", "rarity": 3, "roma_id": "to", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // ...競合
  // 漢字: 浅
  "kan_sen6": { "display_char": "浅", "rarity": 3, "roma_id": "sen", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // 千, 先, 川, 船, 線 と競合
  "kan_asa2": { "display_char": "浅", "rarity": 3, "roma_id": "asa", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // 朝(asa)と競合
  // 漢字: 戦
  "kan_sen7": { "display_char": "戦", "rarity": 3, "roma_id": "sen", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_ikusa": { "display_char": "戦", "rarity": 3, "roma_id": "ikusa", "dan_id": "a_dan", "gyo_id": "i_gyo" }, //
  "kan_tataka": { "display_char": "戦", "rarity": 3, "roma_id": "tataka", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  "kan_ono": { "display_char": "戦", "rarity": 3, "roma_id": "ono", "dan_id": "o_dan", "gyo_id": "o_gyo" }, //
  // 漢字: 選
  "kan_sen8": { "display_char": "選", "rarity": 3, "roma_id": "sen", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_e": { "display_char": "選", "rarity": 3, "roma_id": "e", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // 非常に多くの競合あり

  // --- 16. 漢字 (小学4年生・パート4/5) ---
  // Rarity: 3
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 治
  "kan_ji14": { "display_char": "治", "rarity": 3, "roma_id": "ji", "dan_id": "i_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_chi6": { "display_char": "治", "rarity": 3, "roma_id": "chi", "dan_id": "i_dan", "gyo_id": "ta_gyo" }, // 千, 地, 池, 知, 血 と競合
  "kan_osa": { "display_char": "治", "rarity": 3, "roma_id": "osa", "dan_id": "a_dan", "gyo_id": "o_gyo" }, //
  "kan_nao2": { "display_char": "治", "rarity": 3, "roma_id": "nao", "dan_id": "o_dan", "gyo_id": "na_gyo" }, // 直(nao)と競合
  // 漢字: 辞
  "kan_ji15": { "display_char": "辞", "rarity": 3, "roma_id": "ji", "dan_id": "i_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_ya9": { "display_char": "辞", "rarity": 3, "roma_id": "ya", "dan_id": "a_dan", "gyo_id": "ya_gyo" }, // ...競合
  // 漢字: 失
  "kan_shitsu3": { "display_char": "失", "rarity": 3, "roma_id": "shitsu", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // 室(shitsu), 実(shitsu)と競合
  "kan_ushina": { "display_char": "失", "rarity": 3, "roma_id": "ushina", "dan_id": "a_dan", "gyo_id": "u_gyo" }, //
  "kan_u11": { "display_char": "失", "rarity": 3, "roma_id": "u", "dan_id": "u_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 借
  "kan_shaku4": { "display_char": "借", "rarity": 3, "roma_id": "shaku", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // 赤, 石, 昔 と競合
  "kan_ka20": { "display_char": "借", "rarity": 3, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 種
  "kan_shu7": { "display_char": "種", "rarity": 3, "roma_id": "shu", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_tane": { "display_char": "種", "rarity": 3, "roma_id": "tane", "dan_id": "e_dan", "gyo_id": "ta_gyo" },
  // 漢字: 周
  "kan_shuu8": { "display_char": "周", "rarity": 3, "roma_id": "shuu", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // 秋, 週, 州, 拾, 終, 習, 集 と競合
  "kan_mawa2": { "display_char": "周", "rarity": 3, "roma_id": "mawa", "dan_id": "a_dan", "gyo_id": "ma_gyo" }, // 回(mawa)と競合
  // 漢字: 祝
  "kan_shuku2": { "display_char": "祝", "rarity": 3, "roma_id": "shuku", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // 宿(shuku)と競合
  "kan_shuu9": { "display_char": "祝", "rarity": 3, "roma_id": "shuu", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_iwa2": { "display_char": "祝", "rarity": 3, "roma_id": "iwa", "dan_id": "a_dan", "gyo_id": "i_gyo" }, // 岩(iwa)と競合
  // 漢字: 順
  "kan_jun": { "display_char": "順", "rarity": 3, "roma_id": "jun", "dan_id": "u_dan", "gyo_id": "za_gyo" },
  // 漢字: 初
  "kan_sho7": { "display_char": "初", "rarity": 3, "roma_id": "sho", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_haji2": { "display_char": "初", "rarity": 3, "roma_id": "haji", "dan_id": "i_dan", "gyo_id": "ha_gyo" }, // 始(haji)と競合
  "kan_hatsu2": { "display_char": "初", "rarity": 3, "roma_id": "hatsu", "dan_id": "u_dan", "gyo_id": "ha_gyo" }, // 発(hatsu)と競合
  "kan_some": { "display_char": "初", "rarity": 3, "roma_id": "some", "dan_id": "e_dan", "gyo_id": "sa_gyo" },
  // 漢字: 松
  "kan_shou16": { "display_char": "松", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_matsu2": { "display_char": "松", "rarity": 3, "roma_id": "matsu", "dan_id": "u_dan", "gyo_id": "ma_gyo" }, // 祭(matsu)と競合
  // 漢字: 笑
  "kan_shou17": { "display_char": "笑", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_wara": { "display_char": "笑", "rarity": 3, "roma_id": "wara", "dan_id": "a_dan", "gyo_id": "wa_gyo" },
  "kan_e5": { "display_char": "笑", "rarity": 3, "roma_id": "e", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // 回, 会, 絵, 衣, 選 と競合
  // 漢字: 象
  "kan_shou18": { "display_char": "象", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_zou2": { "display_char": "象", "rarity": 3, "roma_id": "zou", "dan_id": "o_dan", "gyo_id": "za_gyo" }, // 造(zou)と競合
  "kan_katado": { "display_char": "象", "rarity": 3, "roma_id": "katado", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  // 漢字: 賞
  "kan_shou19": { "display_char": "賞", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_home": { "display_char": "賞", "rarity": 3, "roma_id": "home", "dan_id": "e_dan", "gyo_id": "ha_gyo" },
  // 漢字: 城
  "kan_jou5": { "display_char": "城", "rarity": 3, "roma_id": "jou", "dan_id": "o_dan", "gyo_id": "za_gyo" }, // 上, 場, 乗, 定 と競合
  "kan_shiro3": { "display_char": "城", "rarity": 3, "roma_id": "shiro", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 白(shiro), 代(shiro)と競合
  // 漢字: 臣
  "kan_shin12": { "display_char": "臣", "rarity": 3, "roma_id": "shin", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_jin3": { "display_char": "臣", "rarity": 3, "roma_id": "jin", "dan_id": "i_dan", "gyo_id": "za_gyo" }, // 人(jin), 神(jin)と競合
  // 漢字: 信
  "kan_shin13": { "display_char": "信", "rarity": 3, "roma_id": "shin", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  // 漢字: 成
  "kan_sei11": { "display_char": "成", "rarity": 3, "roma_id": "sei", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_jou6": { "display_char": "成", "rarity": 3, "roma_id": "jou", "dan_id": "o_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_na5": { "display_char": "成", "rarity": 3, "roma_id": "na", "dan_id": "a_dan", "gyo_id": "na_gyo" }, // 南, 名, 鳴, 泣 と競合
  // 漢字: 省
  "kan_sei12": { "display_char": "省", "rarity": 3, "roma_id": "sei", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_shou20": { "display_char": "省", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_habu": { "display_char": "省", "rarity": 3, "roma_id": "habu", "dan_id": "u_dan", "gyo_id": "ha_gyo" },
  "kan_kaeri": { "display_char": "省", "rarity": 3, "roma_id": "kaeri", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  // 漢字: 清
  "kan_sei13": { "display_char": "清", "rarity": 3, "roma_id": "sei", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_shou21": { "display_char": "清", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_shin14": { "display_char": "清", "rarity": 3, "roma_id": "shin", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_kiyo": { "display_char": "清", "rarity": 3, "roma_id": "kiyo", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  // 漢字: 静
  "kan_sei14": { "display_char": "静", "rarity": 3, "roma_id": "sei", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_jou7": { "display_char": "静", "rarity": 3, "roma_id": "jou", "dan_id": "o_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_shizu": { "display_char": "静", "rarity": 3, "roma_id": "shizu", "dan_id": "u_dan", "gyo_id": "sa_gyo" },
  // 漢字: 席
  "kan_seki5": { "display_char": "席", "rarity": 3, "roma_id": "seki", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // 赤, 石, 昔, 関 と競合
  "kan_mushiro": { "display_char": "席", "rarity": 3, "roma_id": "mushiro", "dan_id": "o_dan", "gyo_id": "ma_gyo" },
  // 漢字: 積
  "kan_seki6": { "display_char": "積", "rarity": 3, "roma_id": "seki", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_shaku5": { "display_char": "積", "rarity": 3, "roma_id": "shaku", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // 赤, 石, 昔, 借 と競合
  "kan_tsu8": { "display_char": "積", "rarity": 3, "roma_id": "tsu", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // 通, 次, 着, 注, 都 と競合
  // 漢字: 折
  "kan_setsu3": { "display_char": "折", "rarity": 3, "roma_id": "setsu", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // 切(setsu), 雪(setsu)と競合
  "kan_shaku6": { "display_char": "折", "rarity": 3, "roma_id": "shaku", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_o9": { "display_char": "折", "rarity": 3, "roma_id": "o", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_ori": { "display_char": "折", "rarity": 3, "roma_id": "ori", "dan_id": "i_dan", "gyo_id": "o_gyo" }, //
  // 漢字: 節
  "kan_setsu4": { "display_char": "節", "rarity": 3, "roma_id": "setsu", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_sechi": { "display_char": "節", "rarity": 3, "roma_id": "sechi", "dan_id": "i_dan", "gyo_id": "sa_gyo" },
  "kan_fushi": { "display_char": "節", "rarity": 3, "roma_id": "fushi", "dan_id": "i_dan", "gyo_id": "ha_gyo" },
  // 漢字: 説
  "kan_setsu5": { "display_char": "説", "rarity": 3, "roma_id": "setsu", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_zei": { "display_char": "説", "rarity": 3, "roma_id": "zei", "dan_id": "e_dan", "gyo_id": "za_gyo" },
  "kan_to11": { "display_char": "説", "rarity": 3, "roma_id": "to", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // ...競合
  // 漢字: 浅
  "kan_sen6": { "display_char": "浅", "rarity": 3, "roma_id": "sen", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // 千, 先, 川, 船, 線 と競合
  "kan_asa2": { "display_char": "浅", "rarity": 3, "roma_id": "asa", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // 朝(asa)と競合
  // 漢字: 戦
  "kan_sen7": { "display_char": "戦", "rarity": 3, "roma_id": "sen", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_ikusa": { "display_char": "戦", "rarity": 3, "roma_id": "ikusa", "dan_id": "a_dan", "gyo_id": "i_gyo" }, //
  "kan_tataka": { "display_char": "戦", "rarity": 3, "roma_id": "tataka", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  "kan_ono2": { "display_char": "戦", "rarity": 3, "roma_id": "ono", "dan_id": "o_dan", "gyo_id": "o_gyo" }, // 各(onoono)と競合
  // 漢字: 選
  "kan_sen8": { "display_char": "選", "rarity": 3, "roma_id": "sen", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_e6": { "display_char": "選", "rarity": 3, "roma_id": "e", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_era": { "display_char": "選", "rarity": 3, "roma_id": "era", "dan_id": "a_dan", "gyo_id": "e_gyo" }, //

  // --- 16. 漢字 (小学4年生・パート5/5) ---
  // Rarity: 3
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 然
  "kan_zen3": { "display_char": "然", "rarity": 3, "roma_id": "zen", "dan_id": "e_dan", "gyo_id": "za_gyo" }, // 前(zen), 全(zen)と競合
  "kan_nen2": { "display_char": "然", "rarity": 3, "roma_id": "nen", "dan_id": "e_dan", "gyo_id": "na_gyo" }, // 年(nen)と競合
  "kan_shika": { "display_char": "然", "rarity": 3, "roma_id": "shika", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  // 漢字: 争
  "kan_sou7": { "display_char": "争", "rarity": 3, "roma_id": "sou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 草, 走, 相, 送, 想, 箱 と競合
  "kan_araso": { "display_char": "争", "rarity": 3, "roma_id": "araso", "dan_id": "o_dan", "gyo_id": "a_gyo" },
  // 漢字: 倉
  "kan_sou8": { "display_char": "倉", "rarity": 3, "roma_id": "sou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_kura3": { "display_char": "倉", "rarity": 3, "roma_id": "kura", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 暗(kura), 庫(kura)と競合
  // 漢字: 巣
  "kan_sou9": { "display_char": "巣", "rarity": 3, "roma_id": "sou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_su8": { "display_char": "巣", "rarity": 3, "roma_id": "su", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  // 漢字: 相
  // (小学3年生で既に出力済み)
  // 漢字: 造
  // (小学4年生パート2で既に出力済み)
  // 漢字: 増
  "kan_zou3": { "display_char": "増", "rarity": 3, "roma_id": "zou", "dan_id": "o_dan", "gyo_id": "za_gyo" }, // 造(zou), 象(zou)と競合
  "kan_ma6": { "display_char": "増", "rarity": 3, "roma_id": "ma", "dan_id": "a_dan", "gyo_id": "ma_gyo" }, // ...競合
  // 漢字: 束
  "kan_soku4": { "display_char": "束", "rarity": 3, "roma_id": "soku", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 足, 息, 速 と競合
  "kan_taba": { "display_char": "束", "rarity": 3, "roma_id": "taba", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  // 漢字: 村
  // (小学1年生で既に出力済み)
  // 漢字: 他
  // (小学3年生で既に出力済み)
  // 漢字: 打
  // (小学3年生で既に出力済み)
  // 漢字: 対
  // (小学3年生で既に出力済み)
  // 漢字: 袋
  "kan_tai7": { "display_char": "袋", "rarity": 3, "roma_id": "tai", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // 太, 体, 台, 対, 待, 代 と競合
  "kan_fukuro": { "display_char": "袋", "rarity": 3, "roma_id": "fukuro", "dan_id": "o_dan", "gyo_id": "ha_gyo" },
  // 漢字: 第
  // (小学3年生で既に出力済み)
  // 漢字: 達
  "kan_tatsu3": { "display_char": "達", "rarity": 3, "roma_id": "tatsu", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // 立(tatsu), 発(tatsu)と競合
  "kan_tachi": { "display_char": "達", "rarity": 3, "roma_id": "tachi", "dan_id": "i_dan", "gyo_id": "ta_gyo" },
  // 漢字: 単
  "kan_tan4": { "display_char": "単", "rarity": 3, "roma_id": "tan", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // 炭, 短, 反 と競合
  "kan_hitoe": { "display_char": "単", "rarity": 3, "roma_id": "hitoe", "dan_id": "e_dan", "gyo_id": "ha_gyo" },
  // 漢字: 置
  "kan_chi7": { "display_char": "置", "rarity": 3, "roma_id": "chi", "dan_id": "i_dan", "gyo_id": "ta_gyo" }, // 千, 地, 池, 知, 血, 治 と競合
  "kan_o10": { "display_char": "置", "rarity": 3, "roma_id": "o", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 仲
  "kan_chuu6": { "display_char": "仲", "rarity": 3, "roma_id": "chuu", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // 中, 虫, 昼, 注, 柱 と競合
  "kan_naka3": { "display_char": "仲", "rarity": 3, "roma_id": "naka", "dan_id": "a_dan", "gyo_id": "na_gyo" }, // 中(naka), 半(naka)と競合
  // 漢字: 貯
  "kan_cho2": { "display_char": "貯", "rarity": 3, "roma_id": "cho", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // 町, 長, 鳥, 朝 と競合
  "kan_ta10": { "display_char": "貯", "rarity": 3, "roma_id": "ta", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // ...競合
  // 漢字: 兆
  "kan_chou9": { "display_char": "兆", "rarity": 3, "roma_id": "chou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_kiza": { "display_char": "兆", "rarity": 3, "roma_id": "kiza", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 低
  "kan_tei7": { "display_char": "低", "rarity": 3, "roma_id": "tei", "dan_id": "e_dan", "gyo_id": "ta_gyo" }, // 体, 弟, 第, 丁, 定, 庭 と競合
  "kan_hiku": { "display_char": "低", "rarity": 3, "roma_id": "hiku", "dan_id": "u_dan", "gyo_id": "ha_gyo" },
  // 漢字: 底
  "kan_tei8": { "display_char": "底", "rarity": 3, "roma_id": "tei", "dan_id": "e_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_soko": { "display_char": "底", "rarity": 3, "roma_id": "soko", "dan_id": "o_dan", "gyo_id": "sa_gyo" },
  // 漢字: 停
  "kan_tei9": { "display_char": "停", "rarity": 3, "roma_id": "tei", "dan_id": "e_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_to": { "display_char": "停", "rarity": 3, "roma_id": "to", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // 非常に多くの競合あり
  // 漢字: 的
  "kan_teki2": { "display_char": "的", "rarity": 3, "roma_id": "teki", "dan_id": "i_dan", "gyo_id": "ta_gyo" }, // 笛(teki)と競合
  "kan_mato": { "display_char": "的", "rarity": 3, "roma_id": "mato", "dan_id": "o_dan", "gyo_id": "ma_gyo" },
  // 漢字: 典
  "kan_ten5": { "display_char": "典", "rarity": 3, "roma_id": "ten", "dan_id": "e_dan", "gyo_id": "ta_gyo" }, // 天, 店, 点, 転 と競合
  // 漢字: 伝
  "kan_den3": { "display_char": "伝", "rarity": 3, "roma_id": "den", "dan_id": "e_dan", "gyo_id": "da_gyo" }, // 田(den), 電(den)と競合
  "kan_tsuta": { "display_char": "伝", "rarity": 3, "roma_id": "tsuta", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  // 漢字: 徒
  "kan_to12": { "display_char": "徒", "rarity": 3, "roma_id": "to", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_ada": { "display_char": "徒", "rarity": 3, "roma_id": "ada", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  "kan_itazu": { "display_char": "徒", "rarity": 3, "roma_id": "itazu", "dan_id": "u_dan", "gyo_id": "i_gyo" }, //
  // 漢字: 努
  "kan_do3": { "display_char": "努", "rarity": 3, "roma_id": "do", "dan_id": "o_dan", "gyo_id": "da_gyo" }, // 土(do), 度(do)と競合
  "kan_tsuto2": { "display_char": "努", "rarity": 3, "roma_id": "tsuto", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // 勉(tsuto)と競合
  // 漢字: 灯
  "kan_tou14": { "display_char": "灯", "rarity": 3, "roma_id": "tou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_hi8": { "display_char": "灯", "rarity": 3, "roma_id": "hi", "dan_id": "i_dan", "gyo_id": "ha_gyo" }, // ...競合
  "kan_akari": { "display_char": "灯", "rarity": 3, "roma_id": "akari", "dan_id": "i_dan", "gyo_id": "a_gyo" },
  // 漢字: 働
  "kan_dou6": { "display_char": "働", "rarity": 3, "roma_id": "dou", "dan_id": "o_dan", "gyo_id": "da_gyo" }, // 同, 道, 登, 動, 童 と競合
  "kan_hatara": { "display_char": "働", "rarity": 3, "roma_id": "hatara", "dan_id": "a_dan", "gyo_id": "ha_gyo" },
  // 漢字: 特
  "kan_toku2": { "display_char": "特", "rarity": 3, "roma_id": "toku", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // 読(toku)と競合
  // 漢字: 毒
  "kan_doku2": { "display_char": "毒", "rarity": 3, "roma_id": "doku", "dan_id": "u_dan", "gyo_id": "da_gyo" }, // 読(doku)と競合
  // 漢字: 熱
  "kan_netsu": { "display_char": "熱", "rarity": 3, "roma_id": "netsu", "dan_id": "e_dan", "gyo_id": "na_gyo" },
  "kan_atsu4": { "display_char": "熱", "rarity": 3, "roma_id": "atsu", "dan_id": "u_dan", "gyo_id": "a_gyo" }, // 集, 暑, 厚 と競合
  // 漢字: 念
  "kan_nen3": { "display_char": "念", "rarity": 3, "roma_id": "nen", "dan_id": "e_dan", "gyo_id": "na_gyo" }, // 年(nen), 然(nen)と競合
  // 漢字: 敗
  "kan_hai3": { "display_char": "敗", "rarity": 3, "roma_id": "hai", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // 入(hai), 配(hai)と競合
  "kan_yabu": { "display_char": "敗", "rarity": 3, "roma_id": "yabu", "dan_id": "u_dan", "gyo_id": "ya_gyo" },
  // 漢字: 梅
  "kan_bai5": { "display_char": "梅", "rarity": 3, "roma_id": "bai", "dan_id": "a_dan", "gyo_id": "ba_gyo" }, // 貝, 売, 買, 倍 と競合
  "kan_ume": { "display_char": "梅", "rarity": 3, "roma_id": "ume", "dan_id": "e_dan", "gyo_id": "u_gyo" }, //
  // 漢字: 博
  "kan_haku2": { "display_char": "博", "rarity": 3, "roma_id": "haku", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // 白(haku)と競合
  "kan_baku2": { "display_char": "博", "rarity": 3, "roma_id": "baku", "dan_id": "u_dan", "gyo_id": "ba_gyo" }, // 麦(baku)と競合
  // 漢字: 飯
  "kan_han4": { "display_char": "飯", "rarity": 3, "roma_id": "han", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // 半, 反, 板 と競合
  "kan_meshi": { "display_char": "飯", "rarity": 3, "roma_id": "meshi", "dan_id": "i_dan", "gyo_id": "ma_gyo" },
  // 漢字: 飛
  "kan_hi9": { "display_char": "飛", "rarity": 3, "roma_id": "hi", "dan_id": "i_dan", "gyo_id": "ha_gyo" }, // ...競合
  "kan_to13": { "display_char": "飛", "rarity": 3, "roma_id": "to", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合

  // --- 17. 漢字 (小学5年生・パート1/5) ---
  // Rarity: 3
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 愛
  // (小学4年生で既に出力済み)
  // 漢字: 案
  // (小学4年生で既に出力済み)
  // 漢字: 以
  // (小学4年生で既に出力済み)
  // 漢字: 衣
  // (小学4年生で既に出力済み)
  // 漢字: 位
  // (小学4年生で既に出力済み)
  // 漢字: 囲
  // (小学4年生で既に出力済み)
  // 漢字: 胃
  // (小学4年生で既に出力済み)
  // 漢字: 印
  // (小学4年生で既に出力済み)
  // 漢字: 英
  // (小学4年生で既に出力済み)
  // 漢字: 栄
  // (小学4年生で既に出力済み)
  // 漢字: 塩
  // (小学4年生で既に出力済み)
  // 漢字: 億
  // (小学4年生で既に出力済み)
  // 漢字: 加
  // (小学4年生で既に出力済み)
  // 漢字: 果
  // (小学4年生で既に出力済み)
  // 漢字: 貨
  // (小学4年生で既に出力済み)
  // 漢字: 課
  // (小学4年生で既に出力済み)
  // 漢字: 芽
  // (小学4年生で既に出力済み)
  // 漢字: 改
  // (小学4年生で既に出力済み)
  // 漢字: 械
  // (小学4年生で既に出力済み)
  // 漢字: 害
  // (小学4年生で既に出力済み)
  // 漢字: 各
  // (小学4年生で既に出力済み)
  // 漢字: 覚
  // (小学4年生で既に出力済み)
  // 漢字: 完
  // (小学4年生で既に出力済み)
  // 漢字: 管
  // (小学4年生で既に出力済み)
  // 漢字: 関
  // (小学4年生で既に出力済み)
  // 漢字: 感
  // (小学3年生で既に出力済み)
  // 漢字: 観
  "kan_kan9": { "display_char": "観", "rarity": 3, "roma_id": "kan", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_mi8": { "display_char": "観", "rarity": 3, "roma_id": "mi", "dan_id": "i_dan", "gyo_id": "ma_gyo" }, // 三, 見, 実, 身, 深 と競合
  // 漢字: 願
  // (小学4年生で既に出力済み)
  // 漢字: 希
  // (小学4年生で既に出力済み)
  // 漢字: 季
  // (小学4年生で既に出力済み)
  // 漢字: 紀
  // (小学4年生で既に出力済み)
  // 漢字: 喜
  // (小学4年生で既に出力済み)
  // 漢字: 旗
  "kan_ki20": { "display_char": "旗", "rarity": 3, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_hata2": { "display_char": "旗", "rarity": 3, "roma_id": "hata", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // 畑(hata)と競合
  // 漢字: 器
  // (小学4年生で既に出力済み)
  // 漢字: 機
  "kan_ki21": { "display_char": "機", "rarity": 3, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_hata3": { "display_char": "機", "rarity": 3, "roma_id": "hata", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // 畑(hata), 旗(hata)と競合
  // 漢字: 議
  // (小学4年生で既に出力済み)
  // 漢字: 求
  // (小学4年生で既に出力済み)
  // 漢字: 泣
  // (小学4年生で既に出力済み)
  // 漢字: 給
  "kan_kyuu11": { "display_char": "給", "rarity": 3, "roma_id": "kyuu", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 九, 休, 弓, 究, 急, 級, 宮, 球, 求, 泣 と競合
  "kan_tama2": { "display_char": "給", "rarity": 3, "roma_id": "tama", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // 球(tama)と競合
  // 漢字: 挙
  "kan_kyo4": { "display_char": "挙", "rarity": 3, "roma_id": "kyo", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 去(kyo), 居(kyo), 許(kyo)と競合
  "kan_a10": { "display_char": "挙", "rarity": 3, "roma_id": "a", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 漁
  "kan_gyo2": { "display_char": "漁", "rarity": 3, "roma_id": "gyo", "dan_id": "o_dan", "gyo_id": "ga_gyo" }, // 魚(gyo)と競合
  "kan_ryou2": { "display_char": "漁", "rarity": 3, "roma_id": "ryou", "dan_id": "o_dan", "gyo_id": "ra_gyo" }, // 両(ryou)と競合
  "kan_asa3": { "display_char": "漁", "rarity": 3, "roma_id": "asa", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // 朝(asa), 浅(asa)と競合
  // 漢字: 共
  "kan_kyou11": { "display_char": "共", "rarity": 3, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_tomo2": { "display_char": "共", "rarity": 3, "roma_id": "tomo", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // 友(tomo)と競合
  // 漢字: 協
  "kan_kyou12": { "display_char": "協", "rarity": 3, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 鏡
  "kan_kyou13": { "display_char": "鏡", "rarity": 3, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kei11": { "display_char": "鏡", "rarity": 3, "roma_id": "kei", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kagami": { "display_char": "鏡", "rarity": 3, "roma_id": "kagami", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  // 漢字: 競
  "kan_kyou14": { "display_char": "競", "rarity": 3, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kei12": { "display_char": "競", "rarity": 3, "roma_id": "kei", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kiso": { "display_char": "競", "rarity": 3, "roma_id": "kiso", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  "kan_se": { "display_char": "競", "rarity": 3, "roma_id": "se", "dan_id": "e_dan", "gyo_id": "sa_gyo" },
  // 漢字: 極
  "kan_kyoku3": { "display_char": "極", "rarity": 3, "roma_id": "kyoku", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 曲(kyoku), 局(kyoku)と競合
  "kan_goku": { "display_char": "極", "rarity": 3, "roma_id": "goku", "dan_id": "u_dan", "gyo_id": "ga_gyo" },
  "kan_kiwa": { "display_char": "極", "rarity": 3, "roma_id": "kiwa", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  "kan_kiwama3": { "display_char": "極", "rarity": 3, "roma_id": "kiwama", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 谷(kiwama), 究(kiwama)と競合
  // 漢字: 区
  // (小学3年生で既に出力済み)
  // 漢字: 軍
  "kan_gun2": { "display_char": "軍", "rarity": 3, "roma_id": "gun", "dan_id": "u_dan", "gyo_id": "ga_gyo" }, // 群(gun)と競合
  "kan_ikusa2": { "display_char": "軍", "rarity": 3, "roma_id": "ikusa", "dan_id": "a_dan", "gyo_id": "i_gyo" }, // 戦(ikusa)と競合
  // 漢字: 郡
  "kan_gun3": { "display_char": "郡", "rarity": 3, "roma_id": "gun", "dan_id": "u_dan", "gyo_id": "ga_gyo" }, // 群(gun), 軍(gun)と競合
  "kan_koori2": { "display_char": "郡", "rarity": 3, "roma_id": "koori", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // 氷(koori)と競合
  // 漢字: 径
  // (小学4年生パート2で既に出力済み)
  // 漢字: 型
  // (小学4年生パート2で既に出力済み)
  // 漢字: 景
  // (小学4年生パート2で既に出力済み)
  // 漢字: 芸
  // (小学4年生パート2で既に出力済み)
  // 漢字: 欠
  // (小学4年生パート2で既に出力済み)
  // 漢字: 結
  // (小学4年生パート2で既に出力済み)
  // 漢字: 建
  // (小学4年生パート2で既に出力済み)
  // 漢字: 健
  // (小学4年生パート2で既に出力済み)
  // 漢字: 験
  // (小学4年生パート2で既に出力済み)
  // 漢字: 限
  // (小学4年生パート2で既に出力済み)
  // 漢字: 現
  "kan_gen6": { "display_char": "現", "rarity": 3, "roma_id": "gen", "dan_id": "e_dan", "gyo_id": "ga_gyo" }, // 元, 言, 原, 験, 限 と競合
  "kan_arawa2": { "display_char": "現", "rarity": 3, "roma_id": "arawa", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // 表(arawa)と競合
  "kan_utsu": { "display_char": "現", "rarity": 3, "roma_id": "utsu", "dan_id": "u_dan", "gyo_id": "u_gyo" }, // 写(utsu)と競合

  // --- 17. 漢字 (小学5年生・パート2/5) ---
  // Rarity: 3
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 固
  "kan_ko11": { "display_char": "固", "rarity": 3, "roma_id": "ko", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kata2": { "display_char": "固", "rarity": 3, "roma_id": "kata", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 形, 語, 方, 型 と競合
  // 漢字: 功
  "kan_kou24": { "display_char": "功", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ku10": { "display_char": "功", "rarity": 3, "roma_id": "ku", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_isao": { "display_char": "功", "rarity": 3, "roma_id": "isao", "dan_id": "o_dan", "gyo_id": "i_gyo" }, //
  // 漢字: 罪
  "kan_zai": { "display_char": "罪", "rarity": 3, "roma_id": "zai", "dan_id": "a_dan", "gyo_id": "za_gyo" },
  "kan_tsumi": { "display_char": "罪", "rarity": 3, "roma_id": "tsumi", "dan_id": "i_dan", "gyo_id": "ta_gyo" },
  // 漢字: 在
  "kan_zai2": { "display_char": "在", "rarity": 3, "roma_id": "zai", "dan_id": "a_dan", "gyo_id": "za_gyo" }, // 罪(zai)と競合
  "kan_a11": { "display_char": "在", "rarity": 3, "roma_id": "a", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 財
  "kan_zai3": { "display_char": "財", "rarity": 3, "roma_id": "zai", "dan_id": "a_dan", "gyo_id": "za_gyo" }, // 罪, 在 と競合
  "kan_sai9": { "display_char": "財", "rarity": 3, "roma_id": "sai", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_takara2": { "display_char": "財", "rarity": 3, "roma_id": "takara", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // 貨(takara)と競合
  // 漢字: 桜
  "kan_ou6": { "display_char": "桜", "rarity": 3, "roma_id": "ou", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_you9": { "display_char": "桜", "rarity": 3, "roma_id": "you", "dan_id": "o_dan", "gyo_id": "ya_gyo" }, // ...競合
  "kan_sakura": { "display_char": "桜", "rarity": 3, "roma_id": "sakura", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  // 漢字: 冊
  "kan_satsu3": { "display_char": "冊", "rarity": 3, "roma_id": "satsu", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // 刷(satsu), 察(satsu)と競合
  "kan_saku2": { "display_char": "冊", "rarity": 3, "roma_id": "saku", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // 作(saku)と競合
  // 漢字: 殺
  "kan_satsu4": { "display_char": "殺", "rarity": 3, "roma_id": "satsu", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_sai10": { "display_char": "殺", "rarity": 3, "roma_id": "sai", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_setsu6": { "display_char": "殺", "rarity": 3, "roma_id": "setsu", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // 切, 雪, 折, 節, 説 と競合
  "kan_koro2": { "display_char": "殺", "rarity": 3, "roma_id": "koro", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 転(koro)と競合
  // 漢字: 雑
  "kan_zatsu": { "display_char": "雑", "rarity": 3, "roma_id": "zatsu", "dan_id": "a_dan", "gyo_id": "za_gyo" },
  "kan_zou3": { "display_char": "雑", "rarity": 3, "roma_id": "zou", "dan_id": "o_dan", "gyo_id": "za_gyo" }, // 造, 象, 増 と競合
  "kan_maji2": { "display_char": "雑", "rarity": 3, "roma_id": "maji", "dan_id": "i_dan", "gyo_id": "ma_gyo" }, // 交(maji)と競合
  // 漢字: 三
  // (小学1年生で既に出力済み)
  // 漢字: 産
  // (小学4年生パート2で既に出力済み)
  // 漢字: 賛
  "kan_san7": { "display_char": "賛", "rarity": 3, "roma_id": "san", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // 三, 山, 算, 参, 産, 残 と競合
  "kan_tata": { "display_char": "賛", "rarity": 3, "roma_id": "tata", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  // 漢字: 残
  // (小学4年生パート2で既に出力済み)
  // 漢字: 士
  // (小学4年生パート2で既に出力済み)
  // 漢字: 指
  // (小学3年生パート2で既に出力済み)
  // 漢字: 支
  "kan_shi23": { "display_char": "支", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_sasa": { "display_char": "支", "rarity": 3, "roma_id": "sasa", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  // 漢字: 枝
  "kan_shi24": { "display_char": "枝", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_eda": { "display_char": "枝", "rarity": 3, "roma_id": "eda", "dan_id": "a_dan", "gyo_id": "e_gyo" }, //
  // 漢字: 資
  "kan_shi25": { "display_char": "資", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  // 漢字: 飼
  "kan_shi26": { "display_char": "飼", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_ka1": { "display_char": "飼", "rarity": 3, "roma_id": "ka", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 非常に多くの競合あり
  // 漢字: 示
  "kan_shi27": { "display_char": "示", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_ji16": { "display_char": "示", "rarity": 3, "roma_id": "ji", "dan_id": "i_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_shime": { "display_char": "示", "rarity": 3, "roma_id": "shime", "dan_id": "e_dan", "gyo_id": "sa_gyo" },
  // 漢字: 似
  "kan_ji17": { "display_char": "似", "rarity": 3, "roma_id": "ji", "dan_id": "i_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_ni3": { "display_char": "似", "rarity": 3, "roma_id": "ni", "dan_id": "i_dan", "gyo_id": "na_gyo" }, // 二, 荷, 児 と競合
  // 漢字: 識
  "kan_shiki3": { "display_char": "識", "rarity": 3, "roma_id": "shiki", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // 色(shiki), 式(shiki)と競合
  "kan_shiru2": { "display_char": "識", "rarity": 3, "roma_id": "shiru", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // 記(shiru)と競合
  // 漢字: 質
  "kan_shitsu4": { "display_char": "質", "rarity": 3, "roma_id": "shitsu", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // 室, 実, 失 と競合
  "kan_shichi2": { "display_char": "質", "rarity": 3, "roma_id": "shichi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // 七(shichi)と競合
  "kan_chi8": { "display_char": "質", "rarity": 3, "roma_id": "chi", "dan_id": "i_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_tada3": { "display_char": "質", "rarity": 3, "roma_id": "tada", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // 正(tada), 直(tada)と競合
  // 漢字:舎
  "kan_sha5": { "display_char": "舎", "rarity": 3, "roma_id": "sha", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // 車, 社, 写, 者 と競合
  "kan_toneri": { "display_char": "舎", "rarity": 3, "roma_id": "toneri", "dan_id": "i_dan", "gyo_id": "ta_gyo" },
  "kan_yado2": { "display_char": "舎", "rarity": 3, "roma_id": "yado", "dan_id": "o_dan", "gyo_id": "ya_gyo" }, // 宿(yado)と競合
  // 漢字: 谢
  // (常用漢字ではないため除外)
  // 漢字: 授
  "kan_ju8": { "display_char": "授", "rarity": 3, "roma_id": "ju", "dan_id": "u_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_sazu": { "display_char": "授", "rarity": 3, "roma_id": "sazu", "dan_id": "u_dan", "gyo_id": "sa_gyo" },
  // 漢字: 修
  "kan_shuu10": { "display_char": "修", "rarity": 3, "roma_id": "shuu", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_shu8": { "display_char": "修", "rarity": 3, "roma_id": "shu", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_osa2": { "display_char": "修", "rarity": 3, "roma_id": "osa", "dan_id": "a_dan", "gyo_id": "o_gyo" }, // 治(osa)と競合
  // 漢字: 述
  "kan_jutsu": { "display_char": "述", "rarity": 3, "roma_id": "jutsu", "dan_id": "u_dan", "gyo_id": "za_gyo" },
  "kan_nobe": { "display_char": "述", "rarity": 3, "roma_id": "nobe", "dan_id": "e_dan", "gyo_id": "na_gyo" },
  // 漢字: 術
  "kan_jutsu2": { "display_char": "術", "rarity": 3, "roma_id": "jutsu", "dan_id": "u_dan", "gyo_id": "za_gyo" }, // 述(jutsu)と競合
  "kan_sube": { "display_char": "術", "rarity": 3, "roma_id": "sube", "dan_id": "e_dan", "gyo_id": "sa_gyo" },
  // 漢字: 準
  "kan_jun2": { "display_char": "準", "rarity": 3, "roma_id": "jun", "dan_id": "u_dan", "gyo_id": "za_gyo" }, // 順(jun)と競合
  "kan_nazora": { "display_char": "準", "rarity": 3, "roma_id": "nazora", "dan_id": "a_dan", "gyo_id": "na_gyo" },
  // 漢字: 序
  "kan_jo3": { "display_char": "序", "rarity": 3, "roma_id": "jo", "dan_id": "o_dan", "gyo_id": "za_gyo" }, // 女(jo), 助(jo)と競合
  "kan_tsuide": { "display_char": "序", "rarity": 3, "roma_id": "tsuide", "dan_id": "e_dan", "gyo_id": "ta_gyo" },
  // 漢字: 招
  "kan_shou22": { "display_char": "招", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_mane": { "display_char": "招", "rarity": 3, "roma_id": "mane", "dan_id": "e_dan", "gyo_id": "ma_gyo" },
  // 漢字: 承
  "kan_shou23": { "display_char": "承", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_jou8": { "display_char": "承", "rarity": 3, "roma_id": "jou", "dan_id": "o_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_uketama": { "display_char": "承", "rarity": 3, "roma_id": "uketama", "dan_id": "a_dan", "gyo_id": "u_gyo" }, //
  // 漢字: 証
  "kan_shou24": { "display_char": "証", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_akashi": { "display_char": "証", "rarity": 3, "roma_id": "akashi", "dan_id": "i_dan", "gyo_id": "a_gyo" },
  // 漢字: 条
  "kan_jou9": { "display_char": "条", "rarity": 3, "roma_id": "jou", "dan_id": "o_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_chou10": { "display_char": "条", "rarity": 3, "roma_id": "chou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_eda2": { "display_char": "条", "rarity": 3, "roma_id": "eda", "dan_id": "a_dan", "gyo_id": "e_gyo" }, // 枝(eda)と競合
  "kan_suji2": { "display_char": "条", "rarity": 3, "roma_id": "suji", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // 筋(suji)と競合
  // 漢字: 常
  "kan_jou10": { "display_char": "常", "rarity": 3, "roma_id": "jou", "dan_id": "o_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_tsune": { "display_char": "常", "rarity": 3, "roma_id": "tsune", "dan_id": "e_dan", "gyo_id": "ta_gyo" },
  "kan_toko": { "display_char": "常", "rarity": 3, "roma_id": "toko", "dan_id": "o_dan", "gyo_id": "ta_gyo" },
  // 漢字: 情
  "kan_jou11": { "display_char": "情", "rarity": 3, "roma_id": "jou", "dan_id": "o_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_sei15": { "display_char": "情", "rarity": 3, "roma_id": "sei", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_nasake": { "display_char": "情", "rarity": 3, "roma_id": "nasake", "dan_id": "e_dan", "gyo_id": "na_gyo" },
  // 漢字: 織
  "kan_shoku4": { "display_char": "織", "rarity": 3, "roma_id": "shoku", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 食, 色, 植 と競合
  "kan_shiki4": { "display_char": "織", "rarity": 3, "roma_id": "shiki", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // 色, 式, 識 と競合
  "kan_o9": { "display_char": "織", "rarity": 3, "roma_id": "o", "dan_id": "o_dan", "gyo_id": "o_gyo" }, // ...競合
  // 漢字: 製
  "kan_sei16": { "display_char": "製", "rarity": 3, "roma_id": "sei", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  // 漢字: 政
  "kan_sei17": { "display_char": "政", "rarity": 3, "roma_id": "sei", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_shou25": { "display_char": "政", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_matsurigoto": { "display_char": "政", "rarity": 3, "roma_id": "matsurigoto", "dan_id": "o_dan", "gyo_id": "ma_gyo" },
  // 漢字: 勢
  "kan_sei18": { "display_char": "勢", "rarity": 3, "roma_id": "sei", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_zei2": { "display_char": "勢", "rarity": 3, "roma_id": "zei", "dan_id": "e_dan", "gyo_id": "za_gyo" }, // 説(zei)と競合
  "kan_ikio": { "display_char": "勢", "rarity": 3, "roma_id": "ikio", "dan_id": "o_dan", "gyo_id": "i_gyo" }, //
  // 漢字: 精
  "kan_sei19": { "display_char": "精", "rarity": 3, "roma_id": "sei", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_shou26": { "display_char": "精", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  // 漢字: 税
  "kan_zei3": { "display_char": "税", "rarity": 3, "roma_id": "zei", "dan_id": "e_dan", "gyo_id": "za_gyo" }, // 説(zei), 勢(zei)と競合
  "kan_chikara2": { "display_char": "税", "rarity": 3, "roma_id": "chikara", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // 力(chikara)と競合
  // 漢字: 責
  "kan_seki7": { "display_char": "責", "rarity": 3, "roma_id": "seki", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // 赤, 石, 昔, 関, 席, 積 と競合
  "kan_seme": { "display_char": "責", "rarity": 3, "roma_id": "seme", "dan_id": "e_dan", "gyo_id": "sa_gyo" },
  // 漢字: 接
  "kan_setsu7": { "display_char": "接", "rarity": 3, "roma_id": "setsu", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // 切, 雪, 折, 節, 説, 殺 と競合
  "kan_shou27": { "display_char": "接", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_tsu9": { "display_char": "接", "rarity": 3, "roma_id": "tsu", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // ...競合
  // 漢字: 設
  "kan_setsu8": { "display_char": "設", "rarity": 3, "roma_id": "setsu", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_mou3": { "display_char": "設", "rarity": 3, "roma_id": "mou", "dan_id": "o_dan", "gyo_id": "ma_gyo" }, // 毛(mou), 申(mou)と競合
  // 漢字: 舌
  "kan_zetsu": { "display_char": "舌", "rarity": 3, "roma_id": "zetsu", "dan_id": "e_dan", "gyo_id": "za_gyo" },
  "kan_shita3": { "display_char": "舌", "rarity": 3, "roma_id": "shita", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // 下(shita), 親(shita)と競合

  // --- 17. 漢字 (小学5年生・パート3/5) ---
  // Rarity: 3
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 銭
  "kan_sen9": { "display_char": "銭", "rarity": 3, "roma_id": "sen", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // 千, 先, 川, 船, 線, 浅, 戦, 選 と競合
  "kan_zen4": { "display_char": "銭", "rarity": 3, "roma_id": "zen", "dan_id": "e_dan", "gyo_id": "za_gyo" }, // 前, 全, 然 と競合
  "kan_zeni": { "display_char": "銭", "rarity": 3, "roma_id": "zeni", "dan_id": "i_dan", "gyo_id": "za_gyo" },
  // 漢字: 祖
  "kan_so3": { "display_char": "祖", "rarity": 3, "roma_id": "so", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 組(so), 反(so)と競合
  // 漢字: 素
  "kan_so4": { "display_char": "素", "rarity": 3, "roma_id": "so", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_su9": { "display_char": "素", "rarity": 3, "roma_id": "su", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_moto6": { "display_char": "素", "rarity": 3, "roma_id": "moto", "dan_id": "o_dan", "gyo_id": "ma_gyo" }, // 下, 本, 元, 求, 許 と競合
  // 漢字: 総
  "kan_sou10": { "display_char": "総", "rarity": 3, "roma_id": "sou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_su": { "display_char": "総", "rarity": 3, "roma_id": "su", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // 非常に多くの競合あり
  "kan_fusa": { "display_char": "総", "rarity": 3, "roma_id": "fusa", "dan_id": "a_dan", "gyo_id": "ha_gyo" },
  // 漢字: 造
  // (小学4年生パート2で既に出力済み)
  // 漢字: 像
  "kan_zou4": { "display_char": "像", "rarity": 3, "roma_id": "zou", "dan_id": "o_dan", "gyo_id": "za_gyo" }, // 造, 象, 増, 雑 と競合
  "kan_katado2": { "display_char": "像", "rarity": 3, "roma_id": "katado", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 象(katado)と競合
  // 漢字: 増
  // (小学4年生パート5で既に出力済み)
  // 漢字: 速
  // (小学3年生パート3で既に出力済み)
  // 漢字: 則
  "kan_soku5": { "display_char": "則", "rarity": 3, "roma_id": "soku", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 足, 息, 速, 束 と競合
  "kan_no": { "display_char": "則", "rarity": 3, "roma_id": "no", "dan_id": "o_dan", "gyo_id": "na_gyo" }, // 多くの競合あり
  // 漢字: 測
  "kan_soku6": { "display_char": "測", "rarity": 3, "roma_id": "soku", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_haka3": { "display_char": "測", "rarity": 3, "roma_id": "haka", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // 計(haka), 図(haka)と競合
  // 漢字: 属
  "kan_zoku2": { "display_char": "属", "rarity": 3, "roma_id": "zoku", "dan_id": "u_dan", "gyo_id": "za_gyo" }, // 族(zoku)と競合
  "kan_shoku5": { "display_char": "属", "rarity": 3, "roma_id": "shoku", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 食, 色, 植, 織 と競合
  "kan_saka": { "display_char": "属", "rarity": 3, "roma_id": "saka", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // (酒)
  "kan_ya": { "display_char": "属", "rarity": 3, "roma_id": "ya", "dan_id": "a_dan", "gyo_id": "ya_gyo" }, // 非常に多くの競合あり
  // 漢字: 率
  "kan_ritsu2": { "display_char": "率", "rarity": 3, "roma_id": "ritsu", "dan_id": "i_dan", "gyo_id": "ra_gyo" }, // 立(ritsu)と競合
  "kan_sotsu": { "display_char": "率", "rarity": 3, "roma_id": "sotsu", "dan_id": "o_dan", "gyo_id": "sa_gyo" },
  "kan_hiki": { "display_char": "率", "rarity": 3, "roma_id": "hiki", "dan_id": "i_dan", "gyo_id": "ha_gyo" },
  // 漢字: 損
  "kan_son2": { "display_char": "損", "rarity": 3, "roma_id": "son", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 村(son)と競合
  "kan_soko": { "display_char": "損", "rarity": 3, "roma_id": "soko", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // (底)
  // 漢字: 退
  "kan_tai8": { "display_char": "退", "rarity": 3, "roma_id": "tai", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // 太, 体, 台, 対, 待, 代, 袋 と競合
  "kan_shirizo": { "display_char": "退", "rarity": 3, "roma_id": "shirizo", "dan_id": "o_dan", "gyo_id": "sa_gyo" },
  "kan_no": { "display_char": "退", "rarity": 3, "roma_id": "no", "dan_id": "o_dan", "gyo_id": "na_gyo" }, // 非常に多くの競合あり
  "kan_doke": { "display_char": "退", "rarity": 3, "roma_id": "doke", "dan_id": "e_dan", "gyo_id": "da_gyo" },
  // 漢字: 貸
  "kan_tai9": { "display_char": "貸", "rarity": 3, "roma_id": "tai", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_ka": { "display_char": "貸", "rarity": 3, "roma_id": "ka", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 非常に多くの競合あり
  // 漢字: 態
  "kan_tai10": { "display_char": "態", "rarity": 3, "roma_id": "tai", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_waza3": { "display_char": "態", "rarity": 3, "roma_id": "waza", "dan_id": "a_dan", "gyo_id": "wa_gyo" }, // 業(waza), 芸(waza)と競合
  // 漢字: 団
  "kan_dan3": { "display_char": "団", "rarity": 3, "roma_id": "dan", "dan_id": "a_dan", "gyo_id": "da_gyo" }, // 男(dan), 談(dan)と競合
  "kan_ton": { "display_char": "団", "rarity": 3, "roma_id": "ton", "dan_id": "o_dan", "gyo_id": "ta_gyo" },
  "kan_katamari": { "display_char": "団", "rarity": 3, "roma_id": "katamari", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  "kan_maru3": { "display_char": "団", "rarity": 3, "roma_id": "maru", "dan_id": "u_dan", "gyo_id": "ma_gyo" }, // 円(maru), 丸(maru)と競合
  // 漢字: 断
  "kan_dan4": { "display_char": "断", "rarity": 3, "roma_id": "dan", "dan_id": "a_dan", "gyo_id": "da_gyo" }, // ...競合
  "kan_ta11": { "display_char": "断", "rarity": 3, "roma_id": "ta", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_kotowa": { "display_char": "断", "rarity": 3, "roma_id": "kotowa", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 値
  "kan_chi9": { "display_char": "値", "rarity": 3, "roma_id": "chi", "dan_id": "i_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_ne4": { "display_char": "値", "rarity": 3, "roma_id": "ne", "dan_id": "e_dan", "gyo_id": "na_gyo" }, // 音, 根, 練 と競合
  "kan_atai": { "display_char": "値", "rarity": 3, "roma_id": "atai", "dan_id": "i_dan", "gyo_id": "a_gyo" },
  // 漢字: 貯
  // (小学4年生パート5で既に出力済み)
  // 漢字: 張
  "kan_chou11": { "display_char": "張", "rarity": 3, "roma_id": "chou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_ha9": { "display_char": "張", "rarity": 3, "roma_id": "ha", "dan_id": "u_dan", "gyo_id": "ha_gyo" }, // ...競合
  // 漢字: 停
  // (小学4年生パート5で既に出力済み)
  // 漢字: 低
  // (小学4年生パート5で既に出力済み)
  // 漢字: 底
  // (小学4年生パート5で既に出力済み)
  // 漢字: 停
  // (小学4年生パート5で既に出力済み)
  // 漢字: 的
  // (小学4年生パート5で既に出力済み)
  // 漢字: 典
  // (小学4年生パート5で既に出力済み)
  // 漢字: 伝
  // (小学4年生パート5で既に出力済み)
  // 漢字: 徒
  // (小学4年生パート5で既に出力済み)
  // 漢字: 努
  // (小学4年生パート5で既に出力済み)
  // 漢字: 灯
  // (小学4年生パート5で既に出力済み)
  // 漢字: 働
  // (小学4年生パート5で既に出力済み)
  // 漢字: 堂
  "kan_dou7": { "display_char": "堂", "rarity": 3, "roma_id": "dou", "dan_id": "o_dan", "gyo_id": "da_gyo" }, // 同, 道, 登, 動, 童, 働 と競合
  // 漢字: 得
  "kan_toku3": { "display_char": "得", "rarity": 3, "roma_id": "toku", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // 読(toku), 特(toku)と競合
  "kan_e7": { "display_char": "得", "rarity": 3, "roma_id": "e", "dan_id": "u_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 毒
  // (小学4年生パート5で既に出力済み)
  // 漢字: 独
  "kan_doku3": { "display_char": "独", "rarity": 3, "roma_id": "doku", "dan_id": "u_dan", "gyo_id": "da_gyo" }, // 読(doku), 毒(doku)と競合
  "kan_hito4": { "display_char": "独", "rarity": 3, "roma_id": "hito", "dan_id": "i_dan", "gyo_id": "ha_gyo" }, // 一, 人, 等 と競合
  // 漢字: 任
  "kan_nin2": { "display_char": "任", "rarity": 3, "roma_id": "nin", "dan_id": "i_dan", "gyo_id": "na_gyo" }, // 人(nin)と競合
  "kan_maka": { "display_char": "任", "rarity": 3, "roma_id": "maka", "dan_id": "a_dan", "gyo_id": "ma_gyo" },
  // 漢字: 燃
  "kan_nen4": { "display_char": "燃", "rarity": 3, "roma_id": "nen", "dan_id": "e_dan", "gyo_id": "na_gyo" }, // 年, 然, 念 と競合
  "kan_mo": { "display_char": "燃", "rarity": 3, "roma_id": "mo", "dan_id": "e_dan", "gyo_id": "ma_gyo" }, // (持)
  // 漢字: 能
  "kan_nou3": { "display_char": "能", "rarity": 3, "roma_id": "nou", "dan_id": "o_dan", "gyo_id": "na_gyo" }, // 王(nou), 農(nou)と競合
  "kan_yoku": { "display_char": "能", "rarity": 3, "roma_id": "yoku", "dan_id": "u_dan", "gyo_id": "ya_gyo" },
  "kan_ata": { "display_char": "能", "rarity": 3, "roma_id": "ata", "dan_id": "u_dan", "gyo_id": "a_gyo" }, // (中)
  // 漢字: 破
  "kan_ha10": { "display_char": "破", "rarity": 3, "roma_id": "ha", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // ...競合
  "kan_yabu2": { "display_char": "破", "rarity": 3, "roma_id": "yabu", "dan_id": "u_dan", "gyo_id": "ya_gyo" }, // 敗(yabu)と競合
  // 漢字: 犯
  "kan_han5": { "display_char": "犯", "rarity": 3, "roma_id": "han", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // 半, 反, 板, 飯 と競合
  "kan_oka": { "display_char": "犯", "rarity": 3, "roma_id": "oka", "dan_id": "a_dan", "gyo_id": "o_gyo" }, //
  // 漢字: 判
  "kan_han6": { "display_char": "判", "rarity": 3, "roma_id": "han", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // ...競合
  "kan_ban4": { "display_char": "判", "rarity": 3, "roma_id": "ban", "dan_id": "a_dan", "gyo_id": "ba_gyo" }, // 万, 番, 板 と競合
  "kan_waka": { "display_char": "判", "rarity": 3, "roma_id": "waka", "dan_id": "a_dan", "gyo_id": "wa_gyo" },
  // 漢字: 版
  "kan_han7": { "display_char": "版", "rarity": 3, "roma_id": "han", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // ...競合
  // 漢字: 比
  "kan_hi10": { "display_char": "比", "rarity": 3, "roma_id": "hi", "dan_id": "i_dan", "gyo_id": "ha_gyo" }, // ...競合
  "kan_kura3": { "display_char": "比", "rarity": 3, "roma_id": "kura", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 暗, 庫, 倉 と競合
  // 漢字: 肥
  "kan_hi11": { "display_char": "肥", "rarity": 3, "roma_id": "hi", "dan_id": "i_dan", "gyo_id": "ha_gyo" }, // ...競合
  "kan_ko": { "display_char": "肥", "rarity": 3, "roma_id": "ko", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 非常に多くの競合あり
  "kan_koyu": { "display_char": "肥", "rarity": 3, "roma_id": "koyu", "dan_id": "u_dan", "gyo_id": "ka_gyo" },
  // 漢字: 非
  "kan_hi12": { "display_char": "非", "rarity": 3, "roma_id": "hi", "dan_id": "i_dan", "gyo_id": "ha_gyo" }, // ...競合
  "kan_ara": { "display_char": "非", "rarity": 3, "roma_id": "ara", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // (新)
  // 漢字: 備
  "kan_bi4": { "display_char": "備", "rarity": 3, "roma_id": "bi", "dan_id": "i_dan", "gyo_id": "ba_gyo" }, // 火, 美, 鼻 と競合
  "kan_sona2": { "display_char": "備", "rarity": 3, "roma_id": "sona", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // 具(sona)と競合
  // 漢字: 俵
  "kan_hyou3": { "display_char": "俵", "rarity": 3, "roma_id": "hyou", "dan_id": "o_dan", "gyo_id": "ha_gyo" }, // 氷(hyou), 表(hyou)と競合
  "kan_tawara": { "display_char": "俵", "rarity": 3, "roma_id": "tawara", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  // 漢字: 評
  "kan_hyou4": { "display_char": "評", "rarity": 3, "roma_id": "hyou", "dan_id": "o_dan", "gyo_id": "ha_gyo" }, // ...競合
  // 漢字: 貧
  "kan_hin2": { "display_char": "貧", "rarity": 3, "roma_id": "hin", "dan_id": "i_dan", "gyo_id": "ha_gyo" }, // 品(hin)と競合
  "kan_bin": { "display_char": "貧", "rarity": 3, "roma_id": "bin", "dan_id": "i_dan", "gyo_id": "ba_gyo" },
  "kan_mazu": { "display_char": "貧", "rarity": 3, "roma_id": "mazu", "dan_id": "u_dan", "gyo_id": "ma_gyo" },
  // 漢字: 布
  "kan_fu4": { "display_char": "布", "rarity": 3, "roma_id": "fu", "dan_id": "u_dan", "gyo_id": "ha_gyo" }, // 父, 風, 歩 と競合
  "kan_ho3": { "display_char": "布", "rarity": 3, "roma_id": "ho", "dan_id": "o_dan", "gyo_id": "ha_gyo" }, // 火(ho), 歩(ho)と競合
  "kan_nuno": { "display_char": "布", "rarity": 3, "roma_id": "nuno", "dan_id": "o_dan", "gyo_id": "na_gyo" },
  // 漢字: 婦
  "kan_fu5": { "display_char": "婦", "rarity": 3, "roma_id": "fu", "dan_id": "u_dan", "gyo_id": "ha_gyo" }, // ...競合
  "kan_yome": { "display_char": "婦", "rarity": 3, "roma_id": "yome", "dan_id": "e_dan", "gyo_id": "ya_gyo" },
  // 漢字: 富
  "kan_fu6": { "display_char": "富", "rarity": 3, "roma_id": "fu", "dan_id": "u_dan", "gyo_id": "ha_gyo" }, // ...競合
  "kan_fuu2": { "display_char": "富", "rarity": 3, "roma_id": "fuu", "dan_id": "u_dan", "gyo_id": "ha_gyo" }, // 風(fuu)と競合
  "kan_to14": { "display_char": "富", "rarity": 3, "roma_id": "to", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_tomi": { "display_char": "富", "rarity": 3, "roma_id": "tomi", "dan_id": "i_dan", "gyo_id": "ta_gyo" },
  // 漢字: 武
  "kan_bu4": { "display_char": "武", "rarity": 3, "roma_id": "bu", "dan_id": "u_dan", "gyo_id": "ba_gyo" }, // 分, 歩, 部 と競合
  "kan_mu5": { "display_char": "武", "rarity": 3, "roma_id": "mu", "dan_id": "u_dan", "gyo_id": "ma_gyo" }, // 六, 向, 群 と競合
  "kan_take2": { "display_char": "武", "rarity": 3, "roma_id": "take", "dan_id": "e_dan", "gyo_id": "ta_gyo" }, // 竹(take)と競合
  // 漢字: 復
  "kan_fuku3": { "display_char": "復", "rarity": 3, "roma_id": "fuku", "dan_id": "u_dan", "gyo_id": "ha_gyo" }, // 服(fuku), 福(fuku)と競合
  "kan_mata": { "display_char": "復", "rarity": 3, "roma_id": "mata", "dan_id": "a_dan", "gyo_id": "ma_gyo" },
  // 漢字: 複
  "kan_fuku4": { "display_char": "複", "rarity": 3, "roma_id": "fuku", "dan_id": "u_dan", "gyo_id": "ha_gyo" }, // ...競合
  // 漢字: 仏
  "kan_butsu2": { "display_char": "仏", "rarity": 3, "roma_id": "butsu", "dan_id": "u_dan", "gyo_id": "ba_gyo" }, // 物(butsu)と競合
  "kan_futsu": { "display_char": "仏", "rarity": 3, "roma_id": "futsu", "dan_id": "u_dan", "gyo_id": "ha_gyo" },
  "kan_hotoke": { "display_char": "仏", "rarity": 3, "roma_id": "hotoke", "dan_id": "e_dan", "gyo_id": "ha_gyo" },
  // 漢字: 編
  "kan_hen2": { "display_char": "編", "rarity": 3, "roma_id": "hen", "dan_id": "e_dan", "gyo_id": "ha_gyo" }, // 返(hen)と競合
  "kan_a12": { "display_char": "編", "rarity": 3, "roma_id": "a", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 弁
  "kan_ben3": { "display_char": "弁", "rarity": 3, "roma_id": "ben", "dan_id": "e_dan", "gyo_id": "ba_gyo" }, // 勉(ben), 面(ben)と競合
  "kan_hanabira": { "display_char": "弁", "rarity": 3, "roma_id": "hanabira", "dan_id": "a_dan", "gyo_id": "ha_gyo" },
  "kan_waki": { "display_char": "弁", "rarity": 3, "roma_id": "waki", "dan_id": "i_dan", "gyo_id": "wa_gyo" },
  
  // --- 17. 漢字 (小学5年生・パート4/5) ---
  // Rarity: 3
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 保
  "kan_ho4": { "display_char": "保", "rarity": 3, "roma_id": "ho", "dan_id": "o_dan", "gyo_id": "ha_gyo" }, // 火, 歩, 布 と競合
  "kan_hou4": { "display_char": "保", "rarity": 3, "roma_id": "hou", "dan_id": "o_dan", "gyo_id": "ha_gyo" }, // 方, 放 と競合
  "kan_tamo": { "display_char": "保", "rarity": 3, "roma_id": "tamo", "dan_id": "o_dan", "gyo_id": "ta_gyo" },
  // 漢字: 厚
  // (小学4年生パート2で既に出力済み)
  // 漢字: 報
  "kan_hou5": { "display_char": "報", "rarity": 3, "roma_id": "hou", "dan_id": "o_dan", "gyo_id": "ha_gyo" }, // 方, 放, 保 と競合
  "kan_muku": { "display_char": "報", "rarity": 3, "roma_id": "muku", "dan_id": "u_dan", "gyo_id": "ma_gyo" },
  // 漢字: 貿
  "kan_bou": { "display_char": "貿", "rarity": 3, "roma_id": "bou", "dan_id": "o_dan", "gyo_id": "ba_gyo" },
  // 漢字: 防
  "kan_bou2": { "display_char": "防", "rarity": 3, "roma_id": "bou", "dan_id": "o_dan", "gyo_id": "ba_gyo" }, // 貿(bou)と競合
  "kan_fuse": { "display_char": "防", "rarity": 3, "roma_id": "fuse", "dan_id": "e_dan", "gyo_id": "ha_gyo" },
  // 漢字: 牧
  "kan_boku3": { "display_char": "牧", "rarity": 3, "roma_id": "boku", "dan_id": "o_dan", "gyo_id": "ba_gyo" }, // 木(boku), 目(boku)と競合
  "kan_maki": { "display_char": "牧", "rarity": 3, "roma_id": "maki", "dan_id": "i_dan", "gyo_id": "ma_gyo" },
  // 漢字: 末
  "kan_matsu3": { "display_char": "末", "rarity": 3, "roma_id": "matsu", "dan_id": "u_dan", "gyo_id": "ma_gyo" }, // 祭(matsu), 松(matsu)と競合
  "kan_batsu": { "display_char": "末", "rarity": 3, "roma_id": "batsu", "dan_id": "a_dan", "gyo_id": "ba_gyo" },
  "kan_sue": { "display_char": "末", "rarity": 3, "roma_id": "sue", "dan_id": "e_dan", "gyo_id": "sa_gyo" },
  // 漢字: 満
  "kan_man2": { "display_char": "満", "rarity": 3, "roma_id": "man", "dan_id": "a_dan", "gyo_id": "ma_gyo" }, // 万(man)と競合
  "kan_ban5": { "display_char": "満", "rarity": 3, "roma_id": "ban", "dan_id": "a_dan", "gyo_id": "ba_gyo" }, // 万, 番, 板, 判 と競合
  "kan_mi": { "display_char": "満", "rarity": 3, "roma_id": "mi", "dan_id": "i_dan", "gyo_id": "ma_gyo" }, // 非常に多くの競合あり
  // 漢字: 未
  "kan_mi8": { "display_char": "未", "rarity": 3, "roma_id": "mi", "dan_id": "i_dan", "gyo_id": "ma_gyo" }, // ...競合
  "kan_ima": { "display_char": "未", "rarity": 3, "roma_id": "ima", "dan_id": "a_dan", "gyo_id": "i_gyo" }, // (今)
  "kan_hitsuji2": { "display_char": "未", "rarity": 3, "roma_id": "hitsuji", "dan_id": "i_dan", "gyo_id": "ha_gyo" }, // 羊(hitsuji)と競合
  // 漢字: 脈
  "kan_myaku": { "display_char": "脈", "rarity": 3, "roma_id": "myaku", "dan_id": "u_dan", "gyo_id": "ma_gyo" },
  "kan_suji3": { "display_char": "脈", "rarity": 3, "roma_id": "suji", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // 筋(suji), 条(suji)と競合
  // 漢字: 無
  "kan_mu6": { "display_char": "無", "rarity": 3, "roma_id": "mu", "dan_id": "u_dan", "gyo_id": "ma_gyo" }, // 六, 向, 群, 武 と競合
  "kan_bu5": { "display_char": "無", "rarity": 3, "roma_id": "bu", "dan_id": "u_dan", "gyo_id": "ba_gyo" }, // 分, 歩, 部, 武 と競合
  "kan_na6": { "display_char": "無", "rarity": 3, "roma_id": "na", "dan_id": "i_dan", "gyo_id": "na_gyo" }, // ...競合
  // 漢字: 民
  "kan_min2": { "display_char": "民", "rarity": 3, "roma_id": "min", "dan_id": "i_dan", "gyo_id": "ma_gyo" }, // 明(min)と競合
  "kan_tami": { "display_char": "民", "rarity": 3, "roma_id": "tami", "dan_id": "i_dan", "gyo_id": "ta_gyo" },
  // 漢字: 約
  "kan_yaku2": { "display_char": "約", "rarity": 3, "roma_id": "yaku", "dan_id": "u_dan", "gyo_id": "ya_gyo" }, // 薬(yaku)と競合
  "kan_tsuzu": { "display_char": "約", "rarity": 3, "roma_id": "tsuzu", "dan_id": "u_dan", "gyo_id": "ta_gyo" },
  // 漢字: 勇
  "kan_yuu7": { "display_char": "勇", "rarity": 3, "roma_id": "yuu", "dan_id": "u_dan", "gyo_id": "ya_gyo" }, // 右, 友, 由, 油, 有, 遊 と競合
  "kan_isa": { "display_char": "勇", "rarity": 3, "roma_id": "isa", "dan_id": "a_dan", "gyo_id": "i_gyo" }, //
  // 漢字: 要
  "kan_you10": { "display_char": "要", "rarity": 3, "roma_id": "you", "dan_id": "o_dan", "gyo_id": "ya_gyo" }, // ...競合
  "kan_i13": { "display_char": "要", "rarity": 3, "roma_id": "i", "dan_id": "u_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 養
  "kan_you11": { "display_char": "養", "rarity": 3, "roma_id": "you", "dan_id": "o_dan", "gyo_id": "ya_gyo" }, // ...競合
  "kan_yashina": { "display_char": "養", "rarity": 3, "roma_id": "yashina", "dan_id": "a_dan", "gyo_id": "ya_gyo" },
  // 漢字: 浴
  "kan_yoku2": { "display_char": "浴", "rarity": 3, "roma_id": "yoku", "dan_id": "u_dan", "gyo_id": "ya_gyo" }, // 能(yoku)と競合
  "kan_a13": { "display_char": "浴", "rarity": 3, "roma_id": "a", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 利
  "kan_ri3": { "display_char": "利", "rarity": 3, "roma_id": "ri", "dan_id": "i_dan", "gyo_id": "ra_gyo" }, // 里(ri), 理(ri)と競合
  "kan_ki11": { "display_char": "利", "rarity": 3, "roma_id": "ki", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 陸
  "kan_riku": { "display_char": "陸", "rarity": 3, "roma_id": "riku", "dan_id": "u_dan", "gyo_id": "ra_gyo" },
  "kan_roku3": { "display_char": "陸", "rarity": 3, "roma_id": "roku", "dan_id": "u_dan", "gyo_id": "ra_gyo" }, // 六(roku), 緑(roku)と競合
  "kan_oka2": { "display_char": "陸", "rarity": 3, "roma_id": "oka", "dan_id": "a_dan", "gyo_id": "o_gyo" }, // 犯(oka)と競合
  // 漢字: 良
  "kan_ryou3": { "display_char": "良", "rarity": 3, "roma_id": "ryou", "dan_id": "o_dan", "gyo_id": "ra_gyo" }, // 両(ryou), 漁(ryou)と競合
  "kan_yo9": { "display_char": "良", "rarity": 3, "roma_id": "yo", "dan_id": "i_dan", "gyo_id": "ya_gyo" }, // ...競合
  // 漢字: 料
  "kan_ryou4": { "display_char": "料", "rarity": 3, "roma_id": "ryou", "dan_id": "o_dan", "gyo_id": "ra_gyo" }, // ...競合
  "kan_haka4": { "display_char": "料", "rarity": 3, "roma_id": "haka", "dan_id": "u_dan", "gyo_id": "ha_gyo" }, // 計, 図, 測 と競合
  // 漢字: 量
  "kan_ryou5": { "display_char": "量", "rarity": 3, "roma_id": "ryou", "dan_id": "o_dan", "gyo_id": "ra_gyo" }, // ...競合
  "kan_haka5": { "display_char": "量", "rarity": 3, "roma_id": "haka", "dan_id": "u_dan", "gyo_id": "ha_gyo" }, // ...競合
  // 漢字: 輪
  "kan_rin2": { "display_char": "輪", "rarity": 3, "roma_id": "rin", "dan_id": "i_dan", "gyo_id": "ra_gyo" }, // 林(rin)と競合
  "kan_wa5": { "display_char": "輪", "rarity": 3, "roma_id": "wa", "dan_id": "a_dan", "gyo_id": "wa_gyo" }, // 羽, 分, 話, 和 と競合
  // 漢字: 類
  "kan_rui": { "display_char": "類", "rarity": 3, "roma_id": "rui", "dan_id": "i_dan", "gyo_id": "ra_gyo" },
  "kan_tagu": { "display_char": "類", "rarity": 3, "roma_id": "tagu", "dan_id": "i_dan", "gyo_id": "ta_gyo" },
  // 漢字: 令
  "kan_rei2": { "display_char": "令", "rarity": 3, "roma_id": "rei", "dan_id": "e_dan", "gyo_id": "ra_gyo" }, // 礼(rei)と競合
  // 漢字: 冷
  "kan_rei3": { "display_char": "冷", "rarity": 3, "roma_id": "rei", "dan_id": "e_dan", "gyo_id": "ra_gyo" }, // 礼(rei), 令(rei)と競合
  "kan_tsume": { "display_char": "冷", "rarity": 3, "roma_id": "tsume", "dan_id": "e_dan", "gyo_id": "ta_gyo" },
  "kan_hi13": { "display_char": "冷", "rarity": 3, "roma_id": "hi", "dan_id": "e_dan", "gyo_id": "ha_gyo" }, // ...競合
  "kan_sa": { "display_char": "冷", "rarity": 3, "roma_id": "sa", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // 非常に多くの競合あり
  // 漢字: 例
  "kan_rei4": { "display_char": "例", "rarity": 3, "roma_id": "rei", "dan_id": "e_dan", "gyo_id": "ra_gyo" }, // ...競合
  "kan_tato": { "display_char": "例", "rarity": 3, "roma_id": "tato", "dan_id": "o_dan", "gyo_id": "ta_gyo" },
  // 漢字: 歴
  "kan_reki": { "display_char": "歴", "rarity": 3, "roma_id": "reki", "dan_id": "i_dan", "gyo_id": "ra_gyo" },
  // 漢字: 連
  "kan_ren2": { "display_char": "連", "rarity": 3, "roma_id": "ren", "dan_id": "e_dan", "gyo_id": "ra_gyo" }, // 練(ren)と競合
  "kan_tsu10": { "display_char": "連", "rarity": 3, "roma_id": "tsu", "dan_id": "e_dan", "gyo_id": "ta_gyo" }, // ...競合
  // 漢字: 老
  "kan_rou": { "display_char": "老", "rarity": 3, "roma_id": "rou", "dan_id": "o_dan", "gyo_id": "ra_gyo" },
  "kan_o11": { "display_char": "老", "rarity": 3, "roma_id": "o", "dan_id": "i_dan", "gyo_id": "o_gyo" }, // ...競合
  // 漢字: 労
  "kan_rou2": { "display_char": "労", "rarity": 3, "roma_id": "rou", "dan_id": "o_dan", "gyo_id": "ra_gyo" }, // 老(rou)と競合
  "kan_itawa": { "display_char": "労", "rarity": 3, "roma_id": "itawa", "dan_id": "a_dan", "gyo_id": "i_gyo" }, //
  "kan_nega": { "display_char": "労", "rarity": 3, "roma_id": "nega", "dan_id": "u_dan", "gyo_id": "na_gyo" }, // (願)
  // 漢字: 録
  "kan_roku4": { "display_char": "録", "rarity": 3, "roma_id": "roku", "dan_id": "u_dan", "gyo_id": "ra_gyo" }, // 六, 緑, 陸 と競合
  "kan_shiru": { "display_char": "録", "rarity": 3, "roma_id": "shiru", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // (記, 識)

  // --- 17. 漢字 (小学5年生・パート5/5) ---
  // Rarity: 3
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 保
  // (小学5年生パート4で既に出力済み)
  // 漢字: 包
  "kan_hou6": { "display_char": "包", "rarity": 3, "roma_id": "hou", "dan_id": "o_dan", "gyo_id": "ha_gyo" }, // 方, 放, 保, 報 と競合
  "kan_tsutsu": { "display_char": "包", "rarity": 3, "roma_id": "tsutsu", "dan_id": "u_dan", "gyo_id": "ta_gyo" },
  // 漢字: 報
  // (小学5年生パート4で既に出力済み)
  // 漢字: 豊
  "kan_hou7": { "display_char": "豊", "rarity": 3, "roma_id": "hou", "dan_id": "o_dan", "gyo_id": "ha_gyo" }, // ...競合
  "kan_bu6": { "display_char": "豊", "rarity": 3, "roma_id": "bu", "dan_id": "u_dan", "gyo_id": "ba_gyo" }, // 分, 歩, 部, 武, 無 と競合
  "kan_yuta": { "display_char": "豊", "rarity": 3, "roma_id": "yuta", "dan_id": "a_dan", "gyo_id": "ya_gyo" },
  // 漢字: 貿
  // (小学5年生パート4で既に出力済み)
  // 漢字: 防
  // (小学5年生パート4で既に出力済み)
  // 漢字: 牧
  // (小学5年生パート4で既に出力済み)
  // 漢字: 末
  // (小学5年生パート4で既に出力済み)
  // 漢字: 満
  // (小学5年生パート4で既に出力済み)
  // 漢字: 未
  // (小学5年生パート4で既に出力済み)
  // 漢字: 脈
  // (小学5年生パート4で既に出力済み)
  // 漢字: 無
  // (小学5年生パート4で既に出力済み)
  // 漢字: 民
  // (小学5年生パート4で既に出力済み)
  // 漢字: 務
  "kan_mu7": { "display_char": "務", "rarity": 3, "roma_id": "mu", "dan_id": "u_dan", "gyo_id": "ma_gyo" }, // 六, 向, 群, 武, 無 と競合
  "kan_tsuto3": { "display_char": "務", "rarity": 3, "roma_id": "tsuto", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // 勉(tsuto), 努(tsuto)と競合
  // 漢字: 夢
  "kan_mu8": { "display_char": "夢", "rarity": 3, "roma_id": "mu", "dan_id": "u_dan", "gyo_id": "ma_gyo" }, // ...競合
  "kan_bou3": { "display_char": "夢", "rarity": 3, "roma_id": "bou", "dan_id": "o_dan", "gyo_id": "ba_gyo" }, // 貿(bou), 防(bou)と競合
  "kan_yume": { "display_char": "夢", "rarity": 3, "roma_id": "yume", "dan_id": "e_dan", "gyo_id": "ya_gyo" },
  // 漢字: 迷
  "kan_mei5": { "display_char": "迷", "rarity": 3, "roma_id": "mei", "dan_id": "e_dan", "gyo_id": "ma_gyo" }, // 名, 明, 鳴, 命 と競合
  "kan_mayo": { "display_char": "迷", "rarity": 3, "roma_id": "mayo", "dan_id": "o_dan", "gyo_id": "ma_gyo" },
  // 漢字: 綿
  "kan_men2": { "display_char": "綿", "rarity": 3, "roma_id": "men", "dan_id": "e_dan", "gyo_id": "ma_gyo" }, // 面(men)と競合
  "kan_wata": { "display_char": "綿", "rarity": 3, "roma_id": "wata", "dan_id": "a_dan", "gyo_id": "wa_gyo" },
  // 漢字: 約
  // (小学5年生パート4で既に出力済み)
  // 漢字: 勇
  // (小学5年生パート4で既に出力済み)
  // 漢字: 要
  // (小学5年生パート4で既に出力済み)
  // 漢字: 養
  // (小学5年生パート4で既に出力済み)
  // 漢字: 浴
  // (小学5年生パート4で既に出力済み)
  // 漢字: 利
  // (小学5年生パート4で既に出力済み)
  // 漢字: 陸
  // (小学5年生パート4で既に出力済み)
  // 漢字: 良
  // (小学5年生パート4で既に出力済み)
  // 漢字: 料
  // (小学5年生パート4で既に出力済み)
  // 漢字: 量
  // (小学5年生パート4で既に出力済み)
  // 漢字: 輪
  // (小学5年生パート4で既に出力済み)
  // 漢字: 類
  // (小学5年生パート4で既に出力済み)
  // 漢字: 令
  // (小学5年生パート4で既に出力済み)
  // 漢字: 冷
  // (小学5年生パート4で既に出力済み)
  // 漢字: 例
  // (小学5年生パート4で既に出力済み)
  // 漢字: 歴
  // (小学5年生パート4で既に出力済み)
  // 漢字: 連
  // (小学5年生パート4で既に出力済み)
  // 漢字: 老
  // (小学5年生パート4で既に出力済み)
  // 漢字: 労
  // (小学5年生パート4で既に出力済み)
  // 漢字: 録
  // (小学5年生パート4で既に出力済み)
  // 漢字: 論
  "kan_ron": { "display_char": "論", "rarity": 3, "roma_id": "ron", "dan_id": "o_dan", "gyo_id": "ra_gyo" },
  // 漢字: 圧
  "kan_atsu5": { "display_char": "圧", "rarity": 3, "roma_id": "atsu", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // 集, 暑, 厚, 熱 と競合
  "kan_en5": { "display_char": "圧", "rarity": 3, "roma_id": "en", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // 円, 園, 遠, 塩 と競合
  "kan_ou7": { "display_char": "圧", "rarity": 3, "roma_id": "ou", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_osa3": { "display_char": "圧", "rarity": 3, "roma_id": "osa", "dan_id": "e_dan", "gyo_id": "o_gyo" }, // 治(osa), 修(osa)と競合
  // 漢字: 移
  "kan_i14": { "display_char": "移", "rarity": 3, "roma_id": "i", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_utsu2": { "display_char": "移", "rarity": 3, "roma_id": "utsu", "dan_id": "u_dan", "gyo_id": "u_gyo" }, // 写(utsu), 現(utsu)と競合
  // 漢字: 因
  "kan_in7": { "display_char": "因", "rarity": 3, "roma_id": "in", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_yo10": { "display_char": "因", "rarity": 3, "roma_id": "yo", "dan_id": "u_dan", "gyo_id": "ya_gyo" }, // ...競合
  "kan_china": { "display_char": "因", "rarity": 3, "roma_id": "china", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  // 漢字: 永
  "kan_ei4": { "display_char": "永", "rarity": 3, "roma_id": "ei", "dan_id": "e_dan", "gyo_id": "e_gyo" }, // 泳, 英, 栄 と競合
  "kan_naga3": { "display_char": "永", "rarity": 3, "roma_id": "naga", "dan_id": "a_dan", "gyo_id": "na_gyo" }, // 長(naga), 流(naga)と競合
  // 漢字: 衛
  "kan_ei5": { "display_char": "衛", "rarity": 3, "roma_id": "ei", "dan_id": "e_dan", "gyo_id": "e_gyo" }, // ...競合
  // 漢字: 易
  "kan_eki2": { "display_char": "易", "rarity": 3, "roma_id": "eki", "dan_id": "i_dan", "gyo_id": "e_gyo" }, // 駅(eki)と競合
  "kan_i15": { "display_char": "易", "rarity": 3, "roma_id": "i", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_yasa": { "display_char": "易", "rarity": 3, "roma_id": "yasa", "dan_id": "a_dan", "gyo_id": "ya_gyo" },
  // 漢字: 益
  "kan_eki3": { "display_char": "益", "rarity": 3, "roma_id": "eki", "dan_id": "i_dan", "gyo_id": "e_gyo" }, // 駅(eki), 易(eki)と競合
  "kan_yaku3": { "display_char": "益", "rarity": 3, "roma_id": "yaku", "dan_id": "u_dan", "gyo_id": "ya_gyo" }, // 薬(yaku), 約(yaku)と競合
  "kan_masu": { "display_char": "益", "rarity": 3, "roma_id": "masu", "dan_id": "u_dan", "gyo_id": "ma_gyo" },
  // 漢字: 液
  "kan_eki4": { "display_char": "液", "rarity": 3, "roma_id": "eki", "dan_id": "i_dan", "gyo_id": "e_gyo" }, // ...競合
  // 漢字: 演
  "kan_en6": { "display_char": "演", "rarity": 3, "roma_id": "en", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // 円, 園, 遠, 塩, 圧 と競合
  // 漢字: 応
  "kan_ou8": { "display_char": "応", "rarity": 3, "roma_id": "ou", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_kota": { "display_char": "応", "rarity": 3, "roma_id": "kota", "dan_id": "e_dan", "gyo_id": "ka_gyo" },
  // 漢字: 往
  "kan_ou9": { "display_char": "往", "rarity": 3, "roma_id": "ou", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_i16": { "display_char": "往", "rarity": 3, "roma_id": "i", "dan_id": "u_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_yu12": { "display_char": "往", "rarity": 3, "roma_id": "yu", "dan_id": "u_dan", "gyo_id": "ya_gyo" }, // ...競合
  // 漢字: 桜
  // (小学5年生パート2で既に出力済み)
  // 漢字: 可
  "kan_ka": { "display_char": "可", "rarity": 3, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 非常に多くの競合あり
  "kan_be": { "display_char": "可", "rarity": 3, "roma_id": "be", "dan_id": "shi_dan", "gyo_id": "ba_gyo" }, // (部)
  // 漢字: 仮
  "kan_ka21": { "display_char": "仮", "rarity": 3, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ke4": { "display_char": "仮", "rarity": 3, "roma_id": "ke", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 気, 家, 毛, 化, 消, 希 と競合
  "kan_kari": { "display_char": "仮", "rarity": 3, "roma_id": "kari", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  // 漢字: 過
  "kan_ka22": { "display_char": "過", "rarity": 3, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_sugi": { "display_char": "過", "rarity": 3, "roma_id": "sugi", "dan_id": "i_dan", "gyo_id": "sa_gyo" },
  "kan_ayama": { "display_char": "過", "rarity": 3, "roma_id": "ayama", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  // 漢字: 解
  "kan_kai11": { "display_char": "解", "rarity": 3, "roma_id": "kai", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ge4": { "display_char": "解", "rarity": 3, "roma_id": "ge", "dan_id": "e_dan", "gyo_id": "ga_gyo" }, // 下, 夏, 外 と競合
  "kan_to16": { "display_char": "解", "rarity": 3, "roma_id": "to", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // ...競合
  // 漢字: 快
  "kan_kai12": { "display_char": "快", "rarity": 3, "roma_id": "kai", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kokoroyo": { "display_char": "快", "rarity": 3, "roma_id": "kokoroyo", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  // 漢字: 格
  "kan_kaku6": { "display_char": "格", "rarity": 3, "roma_id": "kaku", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 画, 角, 客, 各, 覚 と競合
  "kan_kou25": { "display_char": "格", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_gou5": { "display_char": "格", "rarity": 3, "roma_id": "gou", "dan_id": "o_dan", "gyo_id": "ga_gyo" }, // 強, 合, 業 と競合
  // 漢字: 確
  "kan_kaku7": { "display_char": "確", "rarity": 3, "roma_id": "kaku", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kou26": { "display_char": "確", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_tashi": { "display_char": "確", "rarity": 3, "roma_id": "tashi", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  // 漢字: 額
  "kan_gaku3": { "display_char": "額", "rarity": 3, "roma_id": "gaku", "dan_id": "u_dan", "gyo_id": "ga_gyo" }, // 学(gaku), 楽(gaku)と競合
  "kan_hitai": { "display_char": "額", "rarity": 3, "roma_id": "hitai", "dan_id": "i_dan", "gyo_id": "ha_gyo" },
  // 漢字: 刊
  "kan_kan10": { "display_char": "刊", "rarity": 3, "roma_id": "kan", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 幹
  "kan_kan11": { "display_char": "幹", "rarity": 3, "roma_id": "kan", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_miki": { "display_char": "幹", "rarity": 3, "roma_id": "miki", "dan_id": "i_dan", "gyo_id": "ma_gyo" },
  // 漢字: 看
  "kan_kan12": { "display_char": "看", "rarity": 3, "roma_id": "kan", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_mi9": { "display_char": "看", "rarity": 3, "roma_id": "mi", "dan_id": "u_dan", "gyo_id": "ma_gyo" }, // ...競合
  // 漢字: 慣
  "kan_kan13": { "display_char": "慣", "rarity": 3, "roma_id": "kan", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_na7": { "display_char": "慣", "rarity": 3, "roma_id": "na", "dan_id": "e_dan", "gyo_id": "na_gyo" }, // ...競合
  // 漢字: 関
  // (小学4年生パート1で既に出力済み)
  // 漢字: 管
  // (小学4年生パート1で既に出力済み)
  // 漢字: 観
  // (小学5年生パート1で既に出力済み)
  // 漢字: 丸
  // (小学2年生パート1で既に出力済み)
  // 漢字: 含
  "kan_gan7": { "display_char": "含", "rarity": 3, "roma_id": "gan", "dan_id": "a_dan", "gyo_id": "ga_gyo" }, // 丸, 岩, 顔, 元, 岸, 願 と競合
  "kan_fuku": { "display_char": "含", "rarity": 3, "roma_id": "fuku", "dan_id": "u_dan", "gyo_id": "ha_gyo" }, // (服, 福, 復, 複)
  // 漢字: 岸
  // (小学3年生パート1で既に出力済み)
  // 漢字: 岩
  // (小学2年生パート1で既に出力済み)
  // 漢字: 希
  // (小学4年生パート1で既に出力済み)
  // 漢字: 祈
  "kan_ki22": { "display_char": "祈", "rarity": 3, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ino": { "display_char": "祈", "rarity": 3, "roma_id": "ino", "dan_id": "o_dan", "gyo_id": "i_gyo" }, //
  // 漢字: 季
  // (小学4年生パート1で既に出力済み)
  // 漢字: 紀
  // (小学4年生パート1で既に出力済み)
  // 漢字: 規
  "kan_ki23": { "display_char": "規", "rarity": 3, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 技
  "kan_gi2": { "display_char": "技", "rarity": 3, "roma_id": "gi", "dan_id": "i_dan", "gyo_id": "ga_gyo" }, // 議(gi)と競合
  "kan_waza4": { "display_char": "技", "rarity": 3, "roma_id": "waza", "dan_id": "a_dan", "gyo_id": "wa_gyo" }, // 業, 芸, 態 と競合
  // 漢字: 義
  "kan_gi3": { "display_char": "義", "rarity": 3, "roma_id": "gi", "dan_id": "i_dan", "gyo_id": "ga_gyo" }, // 議, 技 と競合
  // 漢字: 逆
  "kan_gyaku": { "display_char": "逆", "rarity": 3, "roma_id": "gyaku", "dan_id": "u_dan", "gyo_id": "ga_gyo" },
  "kan_geki": { "display_char": "逆", "rarity": 3, "roma_id": "geki", "dan_id": "i_dan", "gyo_id": "ga_gyo" },
  "kan_saka": { "display_char": "逆", "rarity": 3, "roma_id": "saka", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // (酒, 属)
  // 漢字: 久
  "kan_kyuu12": { "display_char": "久", "rarity": 3, "roma_id": "kyuu", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ku11": { "display_char": "久", "rarity": 3, "roma_id": "ku", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_hisa": { "display_char": "久", "rarity": 3, "roma_id": "hisa", "dan_id": "a_dan", "gyo_id": "ha_gyo" },
  // 漢字: 旧
  "kan_kyuu13": { "display_char": "旧", "rarity": 3, "roma_id": "kyuu", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_furui": { "display_char": "旧", "rarity": 3, "roma_id": "furui", "dan_id": "i_dan", "gyo_id": "ha_gyo" },
  "kan_moto7": { "display_char": "旧", "rarity": 3, "roma_id": "moto", "dan_id": "o_dan", "gyo_id": "ma_gyo" }, // 下, 本, 元, 求, 許, 素 と競合
  // 漢字: 居
  // (小学4年生パート1で既に出力済み)
  // 漢字: 許
  // (小学4年生パート1で既に出力済み)
  // 漢字: 境
  // (小学4年生パート2で既に出力済み)
  // 漢字: 均
  "kan_kin5": { "display_char": "均", "rarity": 3, "roma_id": "kin", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // 金, 近, 今, 筋 と競合
  "kan_nara": { "display_char": "均", "rarity": 3, "roma_id": "nara", "dan_id": "a_dan", "gyo_id": "na_gyo" }, // (習)
  // 漢字: 禁止
  // (「禁」は小6)
  // 漢字: 句
  "kan_ku12": { "display_char": "句", "rarity": 3, "roma_id": "ku", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 群
  // (小学4年生パート2で既に出力済み)
  // 漢字: 経
  "kan_kei13": { "display_char": "経", "rarity": 3, "roma_id": "kei", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kyou15": { "display_char": "経", "rarity": 3, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_he": { "display_char": "経", "rarity": 3, "roma_id": "he", "dan_id": "u_dan", "gyo_id": "ha_gyo" },
  "kan_ta12": { "display_char": "経", "rarity": 3, "roma_id": "ta", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // ...競合
  // 漢字: 潔
  "kan_ketsu5": { "display_char": "潔", "rarity": 3, "roma_id": "ketsu", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 血, 決, 欠, 結 と競合
  "kan_isagiyo": { "display_char": "潔", "rarity": 3, "roma_id": "isagiyo", "dan_id": "o_dan", "gyo_id": "i_gyo" }, //
  // 漢字: 件
  "kan_ken11": { "display_char": "件", "rarity": 3, "roma_id": "ken", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kudan": { "display_char": "件", "rarity": 3, "roma_id": "kudan", "dan_id": "n_dan", "gyo_id": "ka_gyo" },
  // 漢字: 券
  "kan_ken12": { "display_char": "券", "rarity": 3, "roma_id": "ken", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合

  // --- 18. 漢字 (小学6年生・パート1/5) ---
  // Rarity: 3
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 哀
  "kan_ai3": { "display_char": "哀", "rarity": 3, "roma_id": "ai", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // 相, 愛 と競合
  "kan_awa": { "display_char": "哀", "rarity": 3, "roma_id": "awa", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  // 漢字: 握
  "kan_aku2": { "display_char": "握", "rarity": 3, "roma_id": "aku", "dan_id": "u_dan", "gyo_id": "a_gyo" }, // 悪(aku)と競合
  "kan_nigi": { "display_char": "握", "rarity": 3, "roma_id": "nigi", "dan_id": "i_dan", "gyo_id": "na_gyo" },
  // 漢字: 扱
  "kan_sou11": { "display_char": "扱", "rarity": 3, "roma_id": "sou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_kyuu14": { "display_char": "扱", "rarity": 3, "roma_id": "kyuu", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_atsuka": { "display_char": "扱", "rarity": 3, "roma_id": "atsuka", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  // 漢字: 依
  "kan_i17": { "display_char": "依", "rarity": 3, "roma_id": "i", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_e5": { "display_char": "依", "rarity": 3, "roma_id": "e", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_yo11": { "display_char": "依", "rarity": 3, "roma_id": "yo", "dan_id": "u_dan", "gyo_id": "ya_gyo" }, // ...競合
  // 漢字: 威
  "kan_i18": { "display_char": "威", "rarity": 3, "roma_id": "i", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_odo": { "display_char": "威", "rarity": 3, "roma_id": "odo", "dan_id": "o_dan", "gyo_id": "o_gyo" }, //
  // 漢字: 為
  "kan_i19": { "display_char": "為", "rarity": 3, "roma_id": "i", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_tame3": { "display_char": "為", "rarity": 3, "roma_id": "tame", "dan_id": "e_dan", "gyo_id": "ta_gyo" }, // 験(tame), 試(tame)と競合
  "kan_na7": { "display_char": "為", "rarity": 3, "roma_id": "na", "dan_id": "u_dan", "gyo_id": "na_gyo" }, // ...競合
  "kan_su10": { "display_char": "為", "rarity": 3, "roma_id": "su", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_waza5": { "display_char": "為", "rarity": 3, "roma_id": "waza", "dan_id": "a_dan", "gyo_id": "wa_gyo" }, // 業, 芸, 態, 技 と競合
  // 漢字: 異
  "kan_i20": { "display_char": "異", "rarity": 3, "roma_id": "i", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_koto3": { "display_char": "異", "rarity": 3, "roma_id": "koto", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 言(koto), 事(koto)と競合
  // 漢字: 移
  // (小学5年生パート5で既に出力済み)
  // 漢字: 維
  "kan_i21": { "display_char": "維", "rarity": 3, "roma_id": "i", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 緯
  "kan_i22": { "display_char": "緯", "rarity": 3, "roma_id": "i", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_yokoito": { "display_char": "緯", "rarity": 3, "roma_id": "yokoito", "dan_id": "o_dan", "gyo_id": "ya_gyo" },
  "kan_nuki": { "display_char": "緯", "rarity": 3, "roma_id": "nuki", "dan_id": "i_dan", "gyo_id": "na_gyo" },
  // 漢字: 壱
  "kan_ichi3": { "display_char": "壱", "rarity": 3, "roma_id": "ichi", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // 一(ichi), 市(ichi)と競合
  "kan_itsu3": { "display_char": "壱", "rarity": 3, "roma_id": "itsu", "dan_id": "u_dan", "gyo_id": "a_gyo" }, // 一(itsu), 五(itsu)と競合
  // 漢字: 芋
  "kan_u12": { "display_char": "芋", "rarity": 3, "roma_id": "u", "dan_id": "u_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_imo": { "display_char": "芋", "rarity": 3, "roma_id": "imo", "dan_id": "o_dan", "gyo_id": "i_gyo" }, //
  // 漢字: 陰
  "kan_in8": { "display_char": "陰", "rarity": 3, "roma_id": "in", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_kage": { "display_char": "陰", "rarity": 3, "roma_id": "kage", "dan_id": "e_dan", "gyo_id": "ka_gyo" },
  // 漢字: 印
  // (小学4年生パート1で既に出力済み)
  // 漢字: 隠
  "kan_in9": { "display_char": "隠", "rarity": 3, "roma_id": "in", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_on": { "display_char": "隠", "rarity": 3, "roma_id": "on", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // (音, 遠, 温)
  "kan_kaku": { "display_char": "隠", "rarity": 3, "roma_id": "kaku", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 多くの競合あり
  // 漢字: 韻
  "kan_in10": { "display_char": "韻", "rarity": 3, "roma_id": "in", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 右
  // (小学1年生で既に出力済み)
  // 漢字: 宇
  "kan_u13": { "display_char": "宇", "rarity": 3, "roma_id": "u", "dan_id": "u_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 羽
  // (小学2年生パート1で既に出力済み)
  // 漢字: 雨
  // (小学1年生で既に出力済み)
  // 漢字: 渦
  "kan_ka23": { "display_char": "渦", "rarity": 3, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_uzu": { "display_char": "渦", "rarity": 3, "roma_id": "uzu", "dan_id": "u_dan", "gyo_id": "u_gyo" }, //
  // 漢字: 浦
  "kan_ho5": { "display_char": "浦", "rarity": 3, "roma_id": "ho", "dan_id": "o_dan", "gyo_id": "ha_gyo" }, // 火, 歩, 布, 保 と競合
  "kan_ura": { "display_char": "浦", "rarity": 3, "roma_id": "ura", "dan_id": "a_dan", "gyo_id": "u_gyo" }, //
  // 漢字: 影
  "kan_ei6": { "display_char": "影", "rarity": 3, "roma_id": "ei", "dan_id": "e_dan", "gyo_id": "e_gyo" }, // 泳, 英, 栄, 衛 と競合
  "kan_kage2": { "display_char": "影", "rarity": 3, "roma_id": "kage", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 陰(kage)と競合
  // 漢字: 鋭
  "kan_ei7": { "display_char": "鋭", "rarity": 3, "roma_id": "ei", "dan_id": "e_dan", "gyo_id": "e_gyo" }, // ...競合
  "kan_surudo": { "display_char": "鋭", "rarity": 3, "roma_id": "surudo", "dan_id": "o_dan", "gyo_id": "sa_gyo" },
  // 漢字: 疫
  "kan_eki5": { "display_char": "疫", "rarity": 3, "roma_id": "eki", "dan_id": "i_dan", "gyo_id": "e_gyo" }, // 駅, 易, 益, 液 と競合
  "kan_yaku4": { "display_char": "疫", "rarity": 3, "roma_id": "yaku", "dan_id": "u_dan", "gyo_id": "ya_gyo" }, // 薬, 約, 益 と競合
  // 漢字: 悦
  "kan_etsu": { "display_char": "悦", "rarity": 3, "roma_id": "etsu", "dan_id": "e_dan", "gyo_id": "e_gyo" }, //
  "kan_yoroko2": { "display_char": "悦", "rarity": 3, "roma_id": "yoroko", "dan_id": "o_dan", "gyo_id": "ya_gyo" }, // 喜(yoroko)と競合
  // 漢字: 越
  "kan_etsu2": { "display_char": "越", "rarity": 3, "roma_id": "etsu", "dan_id": "e_dan", "gyo_id": "e_gyo" }, // 悦(etsu)と競合
  "kan_otsu": { "display_char": "越", "rarity": 3, "roma_id": "otsu", "dan_id": "u_dan", "gyo_id": "o_gyo" }, //
  "kan_ko": { "display_char": "越", "rarity": 3, "roma_id": "ko", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 非常に多くの競合あり
  // 漢字: 謁
  "kan_etsu3": { "display_char": "謁", "rarity": 3, "roma_id": "etsu", "dan_id": "e_dan", "gyo_id": "e_gyo" }, // 悦(etsu), 越(etsu)と競合
  // 漢字: 円
  // (小学1年生で既に出力済み)
  // 漢字: 延
  "kan_en7": { "display_char": "延", "rarity": 3, "roma_id": "en", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // 円, 園, 遠, 塩, 圧, 演 と競合
  "kan_no": { "display_char": "延", "rarity": 3, "roma_id": "no", "dan_id": "i_dan", "gyo_id": "na_gyo" }, // 非常に多くの競合あり
  // 漢字: 沿
  "kan_en8": { "display_char": "沿", "rarity": 3, "roma_id": "en", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_so3": { "display_char": "沿", "rarity": 3, "roma_id": "so", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  // 漢字: 炎
  "kan_en9": { "display_char": "炎", "rarity": 3, "roma_id": "en", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_honoo": { "display_char": "炎", "rarity": 3, "roma_id": "honoo", "dan_id": "o_dan", "gyo_id": "ha_gyo" },
  // 漢字: 怨
  "kan_en10": { "display_char": "怨", "rarity": 3, "roma_id": "en", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_on4": { "display_char": "怨", "rarity": 3, "roma_id": "on", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // 音, 遠, 温, 隠 と競合
  "kan_urami": { "display_char": "怨", "rarity": 3, "roma_id": "urami", "dan_id": "i_dan", "gyo_id": "u_gyo" }, //
  // 漢字: 媛
  "kan_en11": { "display_char": "媛", "rarity": 3, "roma_id": "en", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_hime": { "display_char": "媛", "rarity": 3, "roma_id": "hime", "dan_id": "e_dan", "gyo_id": "ha_gyo" },
  // 漢字: 縁
  "kan_en12": { "display_char": "縁", "rarity": 3, "roma_id": "en", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_fuchi": { "display_char": "縁", "rarity": 3, "roma_id": "fuchi", "dan_id": "i_dan", "gyo_id": "ha_gyo" },
  "kan_yukari": { "display_char": "縁", "rarity": 3, "roma_id": "yukari", "dan_id": "i_dan", "gyo_id": "ya_gyo" },
  "kan_yo": { "display_char": "縁", "rarity": 3, "roma_id": "yo", "dan_id": "u_dan", "gyo_id": "ya_gyo" }, // 非常に多くの競合あり
  // 漢字: 艶
  "kan_en13": { "display_char": "艶", "rarity": 3, "roma_id": "en", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_tsuya": { "display_char": "艶", "rarity": 3, "roma_id": "tsuya", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  "kan_ade": { "display_char": "艶", "rarity": 3, "roma_id": "ade", "dan_id": "e_dan", "gyo_id": "a_gyo" },
  "kan_nama": { "display_char": "艶", "rarity": 3, "roma_id": "nama", "dan_id": "a_dan", "gyo_id": "na_gyo" }, // (生)
  // 漢字: 奥
  "kan_ou10": { "display_char": "奥", "rarity": 3, "roma_id": "ou", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_oku5": { "display_char": "奥", "rarity": 3, "roma_id": "oku", "dan_id": "u_dan", "gyo_id": "o_gyo" }, // 後, 屋, 送, 億 と競合
  "kan_kuma": { "display_char": "奥", "rarity": 3, "roma_id": "kuma", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 往
  // (小学5年生パート5で既に出力済み)
  // 漢字: 応
  // (小学5年生パート5で既に出力済み)
  // 漢字: 押
  "kan_ou11": { "display_char": "押", "rarity": 3, "roma_id": "ou", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_o12": { "display_char": "押", "rarity": 3, "roma_id": "o", "dan_id": "u_dan", "gyo_id": "o_gyo" }, // ...競合
  "kan_osa4": { "display_char": "押", "rarity": 3, "roma_id": "osa", "dan_id": "e_dan", "gyo_id": "o_gyo" }, // 治, 修, 圧 と競合
  // 漢字: 欧
  "kan_ou12": { "display_char": "欧", "rarity": 3, "roma_id": "ou", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_uta3": { "display_char": "欧", "rarity": 3, "roma_id": "uta", "dan_id": "u_dan", "gyo_id": "u_gyo" }, // 歌(uta), 詩(uta)と競合
  "kan_haku3": { "display_char": "欧", "rarity": 3, "roma_id": "haku", "dan_id": "u_dan", "gyo_id": "ha_gyo" }, // 白(haku), 博(haku)と競合
  // 漢字: 殴
  "kan_ou13": { "display_char": "殴", "rarity": 3, "roma_id": "ou", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_nagu": { "display_char": "殴", "rarity": 3, "roma_id": "nagu", "dan_id": "u_dan", "gyo_id": "na_gyo" },
  // 漢字: 翁
  "kan_ou14": { "display_char": "翁", "rarity": 3, "roma_id": "ou", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_okina": { "display_char": "翁", "rarity": 3, "roma_id": "okina", "dan_id": "a_dan", "gyo_id": "o_gyo" }, //

  // --- 18. 漢字 (小学6年生・パート2/5) ---
  // Rarity: 3
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 卸
  "kan_sha6": { "display_char": "卸", "rarity": 3, "roma_id": "sha", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // 車, 社, 写, 者, 舎 と競合
  "kan_oro": { "display_char": "卸", "rarity": 3, "roma_id": "oro", "dan_id": "o_dan", "gyo_id": "o_gyo" }, //
  // 漢字: 温
  // (小学3年生パート1で既に出力済み)
  // 漢字: 佳
  "kan_ka": { "display_char": "佳", "rarity": 3, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 非常に多くの競合あり
  // 漢字: 价
  // (常用漢字ではないため除外 - 介護の「介」を使用)
  // 漢字: 可
  // (小学5年生パート5で既に出力済み)
  // 漢字: 仮
  // (小学5年生パート5で既に出力済み)
  // 漢字: 何
  // (小学2年生パート1で既に出力済み)
  // 漢字: 過
  // (小学5年生パート5で既に出力済み)
  // 漢字: 河
  "kan_ka24": { "display_char": "河", "rarity": 3, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kawa4": { "display_char": "河", "rarity": 3, "roma_id": "kawa", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 川, 交, 皮 と競合
  // 漢字: 夏
  // (小学2年生パート1で既に出力済み)
  // 漢字: 我
  "kan_ga3": { "display_char": "我", "rarity": 3, "roma_id": "ga", "dan_id": "a_dan", "gyo_id": "ga_gyo" }, // 画(ga), 芽(ga)と競合
  "kan_ware": { "display_char": "我", "rarity": 3, "roma_id": "ware", "dan_id": "e_dan", "gyo_id": "wa_gyo" },
  "kan_wa": { "display_char": "我", "rarity": 3, "roma_id": "wa", "dan_id": "a_dan", "gyo_id": "wa_gyo" }, // 非常に多くの競合あり
  // 漢字: 画
  // (小学2年生パート1で既に出力済み)
  // 漢字: 芽
  // (小学4年生パート1で既に出力済み)
  // 漢字: 解
  // (小学5年生パート5で既に出力済み)
  // 漢字: 灰
  "kan_kai13": { "display_char": "灰", "rarity": 3, "roma_id": "kai", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_hai4": { "display_char": "灰", "rarity": 3, "roma_id": "hai", "dan_id": "i_dan", "gyo_id": "ha_gyo" }, // 入, 配, 敗 と競合
  // 漢字: 劾
  "kan_gai3": { "display_char": "劾", "rarity": 3, "roma_id": "gai", "dan_id": "a_dan", "gyo_id": "ga_gyo" }, // 外(gai), 害(gai)と競合
  // 漢字: 皆
  "kan_kai14": { "display_char": "皆", "rarity": 3, "roma_id": "kai", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_mina": { "display_char": "皆", "rarity": 3, "roma_id": "mina", "dan_id": "a_dan", "gyo_id": "ma_gyo" },
  // 漢字: 絵
  // (小学2年生パート1で既に出力済み)
  // 漢字: 該
  "kan_gai4": { "display_char": "該", "rarity": 3, "roma_id": "gai", "dan_id": "a_dan", "gyo_id": "ga_gyo" }, // 外, 害, 劾 と競合
  "kan_ka": { "display_char": "該", "rarity": 3, "roma_id": "ka", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // 非常に多くの競合あり
  // 漢字: 拡
  "kan_kaku8": { "display_char": "拡", "rarity": 3, "roma_id": "kaku", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 画, 角, 客, 各, 覚, 格, 確, 隠 と競合
  "kan_hiro": { "display_char": "拡", "rarity": 3, "roma_id": "hiro", "dan_id": "o_dan", "gyo_id": "ha_gyo" }, // (広, 拾)
  // 漢字: 閣
  "kan_kaku9": { "display_char": "閣", "rarity": 3, "roma_id": "kaku", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 革
  "kan_kaku10": { "display_char": "革", "rarity": 3, "roma_id": "kaku", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kawa5": { "display_char": "革", "rarity": 3, "roma_id": "kawa", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 川, 交, 皮, 河 と競合
  // 漢字: 割
  "kan_katsu3": { "display_char": "割", "rarity": 3, "roma_id": "katsu", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 活(katsu), 合(katsu)と競合
  "kan_wa": { "display_char": "割", "rarity": 3, "roma_id": "wa", "dan_id": "a_dan", "gyo_id": "wa_gyo" }, // 非常に多くの競合あり
  "kan_sa": { "display_char": "割", "rarity": 3, "roma_id": "sa", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // 非常に多くの競合あり
  // 漢字: 株
  "kan_shu9": { "display_char": "株", "rarity": 3, "roma_id": "shu", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_kabu": { "display_char": "株", "rarity": 3, "roma_id": "kabu", "dan_id": "u_dan", "gyo_id": "ka_gyo" },
  // 漢字: 干
  "kan_kan14": { "display_char": "干", "rarity": 3, "roma_id": "kan", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_hi14": { "display_char": "干", "rarity": 3, "roma_id": "hi", "dan_id": "i_dan", "gyo_id": "ha_gyo" }, // ...競合
  // 漢字: 看
  // (小学5年生パート5で既に出力済み)
  // 漢字: 肝
  "kan_kan15": { "display_char": "肝", "rarity": 3, "roma_id": "kan", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kimo": { "display_char": "肝", "rarity": 3, "roma_id": "kimo", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  // 漢字: 艦
  "kan_kan16": { "display_char": "艦", "rarity": 3, "roma_id": "kan", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 含
  // (小学5年生パート5で既に出力済み)
  // 漢字: 寄
  "kan_ki24": { "display_char": "寄", "rarity": 3, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_yo12": { "display_char": "寄", "rarity": 3, "roma_id": "yo", "dan_id": "u_dan", "gyo_id": "ya_gyo" }, // ...競合
  // 漢字: 祈
  // (小学5年生パート5で既に出力済み)
  // 漢字: 貴
  "kan_ki25": { "display_char": "貴", "rarity": 3, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_tatto": { "display_char": "貴", "rarity": 3, "roma_id": "tatto", "dan_id": "o_dan", "gyo_id": "ta_gyo" },
  "kan_touto": { "display_char": "貴", "rarity": 3, "roma_id": "touto", "dan_id": "o_dan", "gyo_id": "ta_gyo" },
  // 漢字: 疑
  "kan_gi4": { "display_char": "疑", "rarity": 3, "roma_id": "gi", "dan_id": "i_dan", "gyo_id": "ga_gyo" }, // 議, 技, 義 と競合
  "kan_utaga": { "display_char": "疑", "rarity": 3, "roma_id": "utaga", "dan_id": "a_dan", "gyo_id": "u_gyo" }, //
  // 漢字: 吸
  "kan_kyuu15": { "display_char": "吸", "rarity": 3, "roma_id": "kyuu", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_su11": { "display_char": "吸", "rarity": 3, "roma_id": "su", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  // 漢字: 供
  "kan_kyou16": { "display_char": "供", "rarity": 3, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ku13": { "display_char": "供", "rarity": 3, "roma_id": "ku", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_sona2": { "display_char": "供", "rarity": 3, "roma_id": "sona", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // 具(sona), 備(sona)と競合
  "kan_tomo3": { "display_char": "供", "rarity": 3, "roma_id": "tomo", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // 友(tomo), 共(tomo)と競合
  // 漢字: 胸
  // (小学4年生パート2で既に出力済み)
  // 漢字: 郷
  "kan_kyou17": { "display_char": "郷", "rarity": 3, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_gou6": { "display_char": "郷", "rarity": 3, "roma_id": "gou", "dan_id": "o_dan", "gyo_id": "ga_gyo" }, // 強, 合, 業, 号, 格 と競合
  "kan_sato2": { "display_char": "郷", "rarity": 3, "roma_id": "sato", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 里(sato)と競合
  // 漢字: 勤
  "kan_kin6": { "display_char": "勤", "rarity": 3, "roma_id": "kin", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // 金, 近, 今, 筋, 均 と競合
  "kan_gon2": { "display_char": "勤", "rarity": 3, "roma_id": "gon", "dan_id": "o_dan", "gyo_id": "ga_gyo" }, // 言(gon)と競合
  "kan_tsuto4": { "display_char": "勤", "rarity": 3, "roma_id": "tsuto", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // 勉, 努, 務 と競合
  // 漢字: 筋
  // (小学4年生パート2で既に出力済み)
  // 漢字: 系
  "kan_kei14": { "display_char": "系", "rarity": 3, "roma_id": "kei", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 京, 兄, 形, 計, 係, 軽, 境, 鏡, 競, 径, 型, 景 と競合
  // 漢字: 경
  // (常用漢字ではないため除外)
  // 漢字: 警
  "kan_kei15": { "display_char": "警", "rarity": 3, "roma_id": "kei", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_imashi": { "display_char": "警", "rarity": 3, "roma_id": "imashi", "dan_id": "e_dan", "gyo_id": "i_gyo" }, //
  // 漢字: 劇
  "kan_geki2": { "display_char": "劇", "rarity": 3, "roma_id": "geki", "dan_id": "i_dan", "gyo_id": "ga_gyo" }, // 逆(geki)と競合
  // 漢字: 激
  "kan_geki3": { "display_char": "激", "rarity": 3, "roma_id": "geki", "dan_id": "i_dan", "gyo_id": "ga_gyo" }, // 逆(geki), 劇(geki)と競合
  "kan_hage": { "display_char": "激", "rarity": 3, "roma_id": "hage", "dan_id": "e_dan", "gyo_id": "ha_gyo" },
  // 漢字: 穴
  "kan_ketsu6": { "display_char": "穴", "rarity": 3, "roma_id": "ketsu", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 血, 決, 欠, 結, 潔 と競合
  "kan_ana": { "display_char": "穴", "rarity": 3, "roma_id": "ana", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  // 漢字: 券
  // (小学5年生パート5で既に出力済み)

  // --- 18. 漢字 (小学6年生・パート3/5) ---
  // Rarity: 3
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 絹
  "kan_ken13": { "display_char": "絹", "rarity": 3, "roma_id": "ken", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kinu": { "display_char": "絹", "rarity": 3, "roma_id": "kinu", "dan_id": "u_dan", "gyo_id": "ka_gyo" },
  // 漢字: 県
  // (小学4年生パート1で既に出力済み)
  // 漢字: 肩
  "kan_ken14": { "display_char": "肩", "rarity": 3, "roma_id": "ken", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kata4": { "display_char": "肩", "rarity": 3, "roma_id": "kata", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 形, 語, 方, 型, 固 と競合
  // 漢字: 権
  "kan_ken15": { "display_char": "権", "rarity": 3, "roma_id": "ken", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_gon3": { "display_char": "権", "rarity": 3, "roma_id": "gon", "dan_id": "o_dan", "gyo_id": "ga_gyo" }, // 言(gon), 勤(gon)と競合
  "kan_omogari": { "display_char": "権", "rarity": 3, "roma_id": "omogari", "dan_id": "i_dan", "gyo_id": "o_gyo" }, //
  // 漢字: 憲
  "kan_ken16": { "display_char": "憲", "rarity": 3, "roma_id": "ken", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 源
  "kan_gen7": { "display_char": "源", "rarity": 3, "roma_id": "gen", "dan_id": "e_dan", "gyo_id": "ga_gyo" }, // 元, 言, 原, 験, 限, 現 と競合
  "kan_minamoto": { "display_char": "源", "rarity": 3, "roma_id": "minamoto", "dan_id": "o_dan", "gyo_id": "ma_gyo" },
  // 漢字: 厳
  "kan_gen8": { "display_char": "厳", "rarity": 3, "roma_id": "gen", "dan_id": "e_dan", "gyo_id": "ga_gyo" }, // ...競合
  "kan_gon4": { "display_char": "厳", "rarity": 3, "roma_id": "gon", "dan_id": "o_dan", "gyo_id": "ga_gyo" }, // 言, 勤, 権 と競合
  "kan_kibi": { "display_char": "厳", "rarity": 3, "roma_id": "kibi", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  "kan_oka": { "display_char": "厳", "rarity": 3, "roma_id": "oka", "dan_id": "a_dan", "gyo_id": "o_gyo" }, // (犯, 陸)
  // 漢字: 己
  "kan_ko13": { "display_char": "己", "rarity": 3, "roma_id": "ko", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ki26": { "display_char": "己", "rarity": 3, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_onore": { "display_char": "己", "rarity": 3, "roma_id": "onore", "dan_id": "e_dan", "gyo_id": "o_gyo" }, //
  "kan_tsuchinoto": { "display_char": "己", "rarity": 3, "roma_id": "tsuchinoto", "dan_id": "o_dan", "gyo_id": "ta_gyo" },
  // 漢字: 呼
  "kan_ko14": { "display_char": "呼", "rarity": 3, "roma_id": "ko", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_yo13": { "display_char": "呼", "rarity": 3, "roma_id": "yo", "dan_id": "o_dan", "gyo_id": "ya_gyo" }, // ...競合
  // 漢字: 誤
  "kan_go7": { "display_char": "誤", "rarity": 3, "roma_id": "go", "dan_id": "o_dan", "gyo_id": "ga_gyo" }, // ...競合
  "kan_ayama": { "display_char": "誤", "rarity": 3, "roma_id": "ayama", "dan_id": "u_dan", "gyo_id": "a_gyo" }, // (過)
  // 漢字: 后
  "kan_kou27": { "display_char": "后", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_go8": { "display_char": "后", "rarity": 3, "roma_id": "go", "dan_id": "o_dan", "gyo_id": "ga_gyo" }, // ...競合
  "kan_kisaki": { "display_char": "后", "rarity": 3, "roma_id": "kisaki", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  // 漢字: 好
  "kan_kou28": { "display_char": "好", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kono": { "display_char": "好", "rarity": 3, "roma_id": "kono", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  "kan_su": { "display_char": "好", "rarity": 3, "roma_id": "su", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // 非常に多くの競合あり
  "kan_i": { "display_char": "好", "rarity": 3, "roma_id": "i", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // 非常に多くの競合あり
  // 漢字: 孝
  "kan_kou29": { "display_char": "孝", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kyou18": { "display_char": "孝", "rarity": 3, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 紅
  "kan_kou30": { "display_char": "紅", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ku14": { "display_char": "紅", "rarity": 3, "roma_id": "ku", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_beni": { "display_char": "紅", "rarity": 3, "roma_id": "beni", "dan_id": "i_dan", "gyo_id": "ba_gyo" },
  "kan_kurenai": { "display_char": "紅", "rarity": 3, "roma_id": "kurenai", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  "kan_aka4": { "display_char": "紅", "rarity": 3, "roma_id": "aka", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 皇
  "kan_kou31": { "display_char": "皇", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ou15": { "display_char": "皇", "rarity": 3, "roma_id": "ou", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 后
  // (上記で出力済み)
  // 漢字: 洪
  "kan_kou32": { "display_char": "洪", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_oo": { "display_char": "洪", "rarity": 3, "roma_id": "oo", "dan_id": "i_dan", "gyo_id": "o_gyo" }, // (多)
  // 漢字: 降
  "kan_kou33": { "display_char": "降", "rarity": 3, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_go9": { "display_char": "降", "rarity": 3, "roma_id": "go", "dan_id": "o_dan", "gyo_id": "ga_gyo" }, // ...競合
  "kan_o13": { "display_char": "降", "rarity": 3, "roma_id": "o", "dan_id": "u_dan", "gyo_id": "o_gyo" }, // ...競合
  "kan_furu2": { "display_char": "降", "rarity": 3, "roma_id": "furu", "dan_id": "u_dan", "gyo_id": "ha_gyo" }, // 古(furu)と競合
  "kan_kuda": { "display_char": "降", "rarity": 3, "roma_id": "kuda", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // (下, 管)
  // 漢字: 刻
  "kan_koku6": { "display_char": "刻", "rarity": 3, "roma_id": "koku", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 石, 谷, 国, 黒, 告 と競合
  "kan_kiza2": { "display_char": "刻", "rarity": 3, "roma_id": "kiza", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 兆(kiza)と競合
  // 漢字: 穀
  "kan_koku7": { "display_char": "穀", "rarity": 3, "roma_id": "koku", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 骨
  "kan_kotsu": { "display_char": "骨", "rarity": 3, "roma_id": "kotsu", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  "kan_hone": { "display_char": "骨", "rarity": 3, "roma_id": "hone", "dan_id": "e_dan", "gyo_id": "ha_gyo" },
  // 漢字: 困
  "kan_kon6": { "display_char": "困", "rarity": 3, "roma_id": "kon", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 金, 近, 今, 根, 建 と競合
  "kan_koma2": { "display_char": "困", "rarity": 3, "roma_id": "koma", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 細(koma)と競合
  // 漢字: 砂
  "kan_sa7": { "display_char": "砂", "rarity": 3, "roma_id": "sa", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_sha7": { "display_char": "砂", "rarity": 3, "roma_id": "sha", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_suna": { "display_char": "砂", "rarity": 3, "roma_id": "suna", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  // 漢字: 座
  "kan_za": { "display_char": "座", "rarity": 3, "roma_id": "za", "dan_id": "a_dan", "gyo_id": "za_gyo" },
  "kan_suwa": { "display_char": "座", "rarity": 3, "roma_id": "suwa", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  // 漢字: 済
  "kan_sai11": { "display_char": "済", "rarity": 3, "roma_id": "sai", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_sei20": { "display_char": "済", "rarity": 3, "roma_id": "sei", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_su12": { "display_char": "済", "rarity": 3, "roma_id": "su", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_sumu": { "display_char": "済", "rarity": 3, "roma_id": "sumu", "dan_id": "u_dan", "gyo_id": "sa_gyo" },
  // 漢字: 裁
  "kan_sai12": { "display_char": "裁", "rarity": 3, "roma_id": "sai", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_ta13": { "display_char": "裁", "rarity": 3, "roma_id": "ta", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_saba": { "display_char": "裁", "rarity": 3, "roma_id": "saba", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  // 漢字: 策
  "kan_saku3": { "display_char": "策", "rarity": 3, "roma_id": "saku", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // 作(saku), 冊(saku)と競合
  // 漢字: 冊
  // (小学5年生パート2で既に出力済み)
  // 漢字: 至
  "kan_shi28": { "display_char": "至", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_ita2": { "display_char": "至", "rarity": 3, "roma_id": "ita", "dan_id": "u_dan", "gyo_id": "i_gyo" }, // 板(ita)と競合
  // 漢字: 私
  "kan_shi29": { "display_char": "私", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_watakushi": { "display_char": "私", "rarity": 3, "roma_id": "watakushi", "dan_id": "i_dan", "gyo_id": "wa_gyo" },
  "kan_watashi": { "display_char": "私", "rarity": 3, "roma_id": "watashi", "dan_id": "i_dan", "gyo_id": "wa_gyo" },
  // 漢字: 姿
  "kan_shi30": { "display_char": "姿", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_sugata": { "display_char": "姿", "rarity": 3, "roma_id": "sugata", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  // 漢字: 視
  "kan_shi31": { "display_char": "視", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_mi10": { "display_char": "視", "rarity": 3, "roma_id": "mi", "dan_id": "u_dan", "gyo_id": "ma_gyo" }, // ...競合
  // 漢字: 詞
  "kan_shi32": { "display_char": "詞", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_kotoba": { "display_char": "詞", "rarity": 3, "roma_id": "kotoba", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 誌
  "kan_shi33": { "display_char": "誌", "rarity": 3, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_shirusu": { "display_char": "誌", "rarity": 3, "roma_id": "shirusu", "dan_id": "u_dan", "gyo_id": "sa_gyo" },
  // 漢字: 磁
  "kan_ji18": { "display_char": "磁", "rarity": 3, "roma_id": "ji", "dan_id": "i_dan", "gyo_id": "za_gyo" }, // ...競合
  // 漢字: 射
  "kan_sha8": { "display_char": "射", "rarity": 3, "roma_id": "sha", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // 車, 社, 写, 者, 舎, 砂 と競合
  "kan_i23": { "display_char": "射", "rarity": 3, "roma_id": "i", "dan_id": "u_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 捨
  "kan_sha9": { "display_char": "捨", "rarity": 3, "roma_id": "sha", "dan_id": "a_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_su13": { "display_char": "捨", "rarity": 3, "roma_id": "su", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  // 漢字: 尺
  "kan_shaku7": { "display_char": "尺", "rarity": 3, "roma_id": "shaku", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // 赤, 石, 昔, 借, 積, 折 と競合
  // 漢字: 若
  "kan_jaku3": { "display_char": "若", "rarity": 3, "roma_id": "jaku", "dan_id": "u_dan", "gyo_id": "za_gyo" }, // 弱(jaku), 着(jaku)と競合
  "kan_nyaku": { "display_char": "若", "rarity": 3, "roma_id": "nyaku", "dan_id": "u_dan", "gyo_id": "na_gyo" },
  "kan_waka2": { "display_char": "若", "rarity": 3, "roma_id": "waka", "dan_id": "a_dan", "gyo_id": "wa_gyo" }, // 判(waka)と競合
  "kan_mo": { "display_char": "若", "rarity": 3, "roma_id": "mo", "dan_id": "shi_dan", "gyo_id": "ma_gyo" }, // (持, 燃)
  // 漢字: 樹
  "kan_ju10": { "display_char": "樹", "rarity": 3, "roma_id": "ju", "dan_id": "u_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_ki27": { "display_char": "樹", "rarity": 3, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 収
  "kan_shuu11": { "display_char": "収", "rarity": 3, "roma_id": "shuu", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_osa3": { "display_char": "収", "rarity": 3, "roma_id": "osa", "dan_id": "u_dan", "gyo_id": "o_gyo" }, // 治, 修, 圧, 押 と競合
  // 漢字: 宗
  "kan_shuu12": { "display_char": "宗", "rarity": 3, "roma_id": "shuu", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_sou12": { "display_char": "宗", "rarity": 3, "roma_id": "sou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_mune2": { "display_char": "宗", "rarity": 3, "roma_id": "mune", "dan_id": "e_dan", "gyo_id": "ma_gyo" }, // 胸(mune)と競合
  // 漢字: 就
  "kan_shuu13": { "display_char": "就", "rarity": 3, "roma_id": "shuu", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_ju11": { "display_char": "就", "rarity": 3, "roma_id": "ju", "dan_id": "u_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_tsu": { "display_char": "就", "rarity": 3, "roma_id": "tsu", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // 非常に多くの競合あり
  // 漢字: 衆
  "kan_shuu14": { "display_char": "衆", "rarity": 3, "roma_id": "shuu", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_shu10": { "display_char": "衆", "rarity": 3, "roma_id": "shu", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_oo": { "display_char": "衆", "rarity": 3, "roma_id": "oo", "i_dan", "gyo_id": "o_gyo" }, // (多, 洪)
  // 漢字: 従
  "kan_juu8": { "display_char": "従", "rarity": 3, "roma_id": "juu", "dan_id": "u_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_shou28": { "display_char": "従", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_ju12": { "display_char": "従", "rarity": 3, "roma_id": "ju", "dan_id": "u_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_shitaga": { "display_char": "従", "rarity": 3, "roma_id": "shitaga", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  // 漢字: 縦
  "kan_juu9": { "display_char": "縦", "rarity": 3, "roma_id": "juu", "dan_id": "u_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_tate2": { "display_char": "縦", "rarity": 3, "roma_id": "tate", "dan_id": "e_dan", "gyo_id": "ta_gyo" }, // 館(tate)と競合
  // 漢字: 縮
  "kan_shuku3": { "display_char": "縮", "rarity": 3, "roma_id": "shuku", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // 宿(shuku), 祝(shuku)と競合
  "kan_chiji": { "display_char": "縮", "rarity": 3, "roma_id": "chiji", "dan_id": "i_dan", "gyo_id": "ta_gyo" },
  // 漢字: 熟
  "kan_juku": { "display_char": "熟", "rarity": 3, "roma_id": "juku", "dan_id": "u_dan", "gyo_id": "za_gyo" },
  "kan_u14": { "display_char": "熟", "rarity": 3, "roma_id": "u", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 純
  "kan_jun3": { "display_char": "純", "rarity": 3, "roma_id": "jun", "dan_id": "u_dan", "gyo_id": "za_gyo" }, // 順(jun), 準(jun)と競合
  // 漢字: 処
  "kan_sho8": { "display_char": "処", "rarity": 3, "roma_id": "sho", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_tokoro2": { "display_char": "処", "rarity": 3, "roma_id": "tokoro", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // 所(tokoro)と競合
  // 漢字: 署
  "kan_sho9": { "display_char": "署", "rarity": 3, "roma_id": "sho", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  // 漢字: 諸
  "kan_sho10": { "display_char": "諸", "rarity": 3, "roma_id": "sho", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_moro": { "display_char": "諸", "rarity": 3, "roma_id": "moro", "dan_id": "o_dan", "gyo_id": "ma_gyo" },
  // 漢字: 除
  "kan_jo4": { "display_char": "除", "rarity": 3, "roma_id": "jo", "dan_id": "o_dan", "gyo_id": "za_gyo" }, // 女, 助, 序 と競合
  "kan_ji19": { "display_char": "除", "rarity": 3, "roma_id": "ji", "dan_id": "i_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_nozo": { "display_char": "除", "rarity": 3, "roma_id": "nozo", "dan_id": "o_dan", "gyo_id": "na_gyo" },
  // 漢字: 將
  // (常用漢字ではないため除外 - 「将」を使用)
  // 漢字: 傷
  "kan_shou29": { "display_char": "傷", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_kizu": { "display_char": "傷", "rarity": 3, "roma_id": "kizu", "dan_id": "u_dan", "gyo_id": "ka_gyo" },
  "kan_ita3": { "display_char": "傷", "rarity": 3, "roma_id": "ita", "dan_id": "a_dan", "gyo_id": "i_gyo" }, // 板(ita), 至(ita)と競合
  // 漢字: 障
  "kan_shou30": { "display_char": "障", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_sawa": { "display_char": "障", "rarity": 3, "roma_id": "sawa", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  // 漢字: 城
  // (小学4年生パート3で既に出力済み)
  // 漢字: 蒸
  "kan_jou12": { "display_char": "蒸", "rarity": 3, "roma_id": "jou", "dan_id": "o_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_shou31": { "display_char": "蒸", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_mu9": { "display_char": "蒸", "rarity": 3, "roma_id": "mu", "dan_id": "u_dan", "gyo_id": "ma_gyo" }, // ...競合
  // 漢字: 針
  "kan_shin15": { "display_char": "針", "rarity": 3, "roma_id": "shin", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_hari": { "display_char": "針", "rarity": 3, "roma_id": "hari", "dan_id": "i_dan", "gyo_id": "ha_gyo" },
  // 漢字: 仁
  "kan_jin4": { "display_char": "仁", "rarity": 3, "roma_id": "jin", "dan_id": "i_dan", "gyo_id": "za_gyo" }, // 人, 神, 臣 と競合
  "kan_ni2": { "display_char": "仁", "rarity": 3, "roma_id": "ni", "dan_id": "i_dan", "gyo_id": "na_gyo" }, // 二, 荷, 児, 似 と競合
  // 漢字: 垂
  "kan_sui3": { "display_char": "垂", "rarity": 3, "roma_id": "sui", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // 水(sui), 出(sui)と競合
  "kan_ta": { "display_char": "垂", "rarity": 3, "roma_id": "ta", "dan_id": "e_dan", "gyo_id": "ta_gyo" }, // 非常に多くの競合あり
  // 漢字: 推
  "kan_sui4": { "display_char": "推", "rarity": 3, "roma_id": "sui", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_o14": { "display_char": "推", "rarity": 3, "roma_id": "o", "dan_id": "u_dan", "gyo_id": "o_gyo" }, // ...競合
  // 漢字: 寸
  "kan_sun": { "display_char": "寸", "rarity": 3, "roma_id": "sun", "dan_id": "u_dan", "gyo_id": "sa_gyo" },
  // 漢字: 盛
  "kan_sei21": { "display_char": "盛", "rarity": 3, "roma_id": "sei", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_jou13": { "display_char": "盛", "rarity": 3, "roma_id": "jou", "dan_id": "o_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_mo": { "display_char": "盛", "rarity": 3, "roma_id": "mo", "dan_id": "u_dan", "gyo_id": "ma_gyo" }, // (持, 燃, 若)
  "kan_saka": { "display_char": "盛", "rarity": 3, "roma_id": "saka", "dan_id": "n_dan", "gyo_id": "sa_gyo" }, // (酒, 属, 逆)
  // 漢字: 聖
  "kan_sei22": { "display_char": "聖", "rarity": 3, "roma_id": "sei", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_shou32": { "display_char": "聖", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_hijiri": { "display_char": "聖", "rarity": 3, "roma_id": "hijiri", "dan_id": "i_dan", "gyo_id": "ha_gyo" },

  // --- 19. 漢字 (小学6年生・パート4/5) ---
  // Rarity: 3
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 誠
  "kan_sei23": { "display_char": "誠", "rarity": 3, "roma_id": "sei", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_makoto": { "display_char": "誠", "rarity": 3, "roma_id": "makoto", "dan_id": "o_dan", "gyo_id": "ma_gyo" }, // 真(makoto)と競合
  // 漢字: 宣
  "kan_sen9": { "display_char": "宣", "rarity": 3, "roma_id": "sen", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // 千, 先, 川, 船, 線, 浅, 戦, 選 と競合
  "kan_notama": { "display_char": "宣", "rarity": 3, "roma_id": "notama", "dan_id": "a_dan", "gyo_id": "na_gyo" },
  // 漢字: 専
  "kan_sen10": { "display_char": "専", "rarity": 3, "roma_id": "sen", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_moppa": { "display_char": "専", "rarity": 3, "roma_id": "moppa", "dan_id": "a_dan", "gyo_id": "ma_gyo" },
  // 漢字: 泉
  "kan_sen11": { "display_char": "泉", "rarity": 3, "roma_id": "sen", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_izumi": { "display_char": "泉", "rarity": 3, "roma_id": "izumi", "dan_id": "i_dan", "gyo_id": "i_gyo" }, //
  // 漢字: 洗
  "kan_sen12": { "display_char": "洗", "rarity": 3, "roma_id": "sen", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_ara2": { "display_char": "洗", "rarity": 3, "roma_id": "ara", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // 新(ara)と競合
  // 漢字: 染
  "kan_sen13": { "display_char": "染", "rarity": 3, "roma_id": "sen", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_so5": { "display_char": "染", "rarity": 3, "roma_id": "so", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 組, 反, 祖, 素 と競合
  "kan_shi": { "display_char": "染", "rarity": 3, "roma_id": "shi", "dan_id": "mi_dan", "gyo_id": "sa_gyo" }, // 非常に多くの競合あり
  // 漢字: 善
  "kan_zen4": { "display_char": "善", "rarity": 3, "roma_id": "zen", "dan_id": "e_dan", "gyo_id": "za_gyo" }, // 前, 全, 然, 銭 と競合
  "kan_yo14": { "display_char": "善", "rarity": 3, "roma_id": "yo", "dan_id": "i_dan", "gyo_id": "ya_gyo" }, // ...競合
  // 漢字: 奏
  "kan_sou13": { "display_char": "奏", "rarity": 3, "roma_id": "sou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 草, 走, 相, 送, 想, 箱, 倉, 巣, 総 と競合
  "kan_kana3": { "display_char": "奏", "rarity": 3, "roma_id": "kana", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 金(kana), 悲(kana)と競合
  // 漢字: 窓
  "kan_sou14": { "display_char": "窓", "rarity": 3, "roma_id": "sou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_mado": { "display_char": "窓", "rarity": 3, "roma_id": "mado", "dan_id": "o_dan", "gyo_id": "ma_gyo" },
  // 漢字: 創
  "kan_sou15": { "display_char": "創", "rarity": 3, "roma_id": "sou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_shou33": { "display_char": "創", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_tsuku3": { "display_char": "創", "rarity": 3, "roma_id": "tsuku", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // 作(tsuku), 造(tsuku), 案(tsuku) と競合
  "kan_kizu2": { "display_char": "創", "rarity": 3, "roma_id": "kizu", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 傷(kizu)と競合
  // 漢字: 装
  "kan_sou16": { "display_char": "装", "rarity": 3, "roma_id": "sou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_shou34": { "display_char": "装", "rarity": 3, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_yosoo": { "display_char": "装", "rarity": 3, "roma_id": "yosoo", "dan_id": "o_dan", "gyo_id": "ya_gyo" },
  // 漢字: 層
  // (小学5年生パート4で既に出力済み)
  // 漢字: 操
  "kan_sou17": { "display_char": "操", "rarity": 3, "roma_id": "sou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_ayatsu": { "display_char": "操", "rarity": 3, "roma_id": "ayatsu", "dan_id": "u_dan", "gyo_id": "a_gyo" },
  "kan_misao": { "display_char": "操", "rarity": 3, "roma_id": "misao", "dan_id": "o_dan", "gyo_id": "ma_gyo" },
  // 漢字: 蔵
  "kan_zou5": { "display_char": "蔵", "rarity": 3, "roma_id": "zou", "dan_id": "o_dan", "gyo_id": "za_gyo" }, // 造, 象, 増, 雑 と競合
  "kan_sou18": { "display_char": "蔵", "rarity": 3, "roma_id": "sou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_kura4": { "display_char": "蔵", "rarity": 3, "roma_id": "kura", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 暗, 庫, 倉, 比 と競合
  // 漢字: 臓
  "kan_zou6": { "display_char": "臓", "rarity": 3, "roma_id": "zou", "dan_id": "o_dan", "gyo_id": "za_gyo" }, // ...競合
  "kan_wata2": { "display_char": "臓", "rarity": 3, "roma_id": "wata", "dan_id": "a_dan", "gyo_id": "wa_gyo" }, // 綿(wata)と競合
  // 漢字: 存
  "kan_son3": { "display_char": "存", "rarity": 3, "roma_id": "son", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 村(son), 損(son)と競合
  "kan_zon": { "display_char": "存", "rarity": 3, "roma_id": "zon", "dan_id": "o_dan", "gyo_id": "za_gyo" },

  // --- 20. 漢字 (小学6年生・パート5/5) ---
  // Rarity: 3
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 尊
  "kan_son4": { "display_char": "尊", "rarity": 3, "roma_id": "son", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 村, 損, 存 と競合
  "kan_touto2": { "display_char": "尊", "rarity": 3, "roma_id": "touto", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // 貴(touto)と競合
  "kan_tatto2": { "display_char": "尊", "rarity": 3, "roma_id": "tatto", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // 貴(tatto)と競合
  // 漢字: 宅
  "kan_taku": { "display_char": "宅", "rarity": 3, "roma_id": "taku", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // 度(taku)と競合
  // 漢字: 担
  "kan_tan5": { "display_char": "担", "rarity": 3, "roma_id": "tan", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // 炭, 短, 反, 単 と競合
  "kan_nina": { "display_char": "担", "rarity": 3, "roma_id": "nina", "dan_id": "a_dan", "gyo_id": "na_gyo" },
  // 漢字: 探
  "kan_tan6": { "display_char": "探", "rarity": 3, "roma_id": "tan", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_saga": { "display_char": "探", "rarity": 3, "roma_id": "saga", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  // 漢字: 誕
  "kan_tan7": { "display_char": "誕", "rarity": 3, "roma_id": "tan", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // ...競合
  // 漢字: 段
  "kan_dan5": { "display_char": "段", "rarity": 3, "roma_id": "dan", "dan_id": "a_dan", "gyo_id": "da_gyo" }, // 男, 談, 団, 断 と競合
  "kan_tan8": { "display_char": "段", "rarity": 3, "roma_id": "tan", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // ...競合
  // 漢字: 暖
  "kan_dan6": { "display_char": "暖", "rarity": 3, "roma_id": "dan", "dan_id": "a_dan", "gyo_id": "da_gyo" }, // ...競合
  "kan_atata2": { "display_char": "暖", "rarity": 3, "roma_id": "atata", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // 温(atata)と競合
  // 漢字: 値
  // (小学5年生パート3で既に出力済み)
  // 漢字: 宙
  "kan_chuu7": { "display_char": "宙", "rarity": 3, "roma_id": "chuu", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // 中, 虫, 昼, 注, 柱, 仲 と競合
  // 漢字: 忠
  "kan_chuu8": { "display_char": "忠", "rarity": 3, "roma_id": "chuu", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // ...競合
  // 漢字: 著
  "kan_cho3": { "display_char": "著", "rarity": 3, "roma_id": "cho", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // 町, 長, 鳥, 朝, 貯 と競合
  "kan_chaku2": { "display_char": "著", "rarity": 3, "roma_id": "chaku", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // 着(chaku)と競合
  "kan_arawa3": { "display_char": "著", "rarity": 3, "roma_id": "arawa", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // 表(arawa), 現(arawa)と競合
  "kan_ichi": { "display_char": "著", "rarity": 3, "roma_id": "ichi", "dan_id": "i_dan", "gyo_id": "i_gyo" }, // (一, 市)
  // 漢字: 庁
  "kan_chou12": { "display_char": "庁", "rarity": 3, "roma_id": "chou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_tei10": { "display_char": "庁", "rarity": 3, "roma_id": "tei", "dan_id": "e_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_yakusho": { "display_char": "庁", "rarity": 3, "roma_id": "yakusho", "dan_id": "o_dan", "gyo_id": "ya_gyo" },
  // 漢字: 頂
  "kan_chou13": { "display_char": "頂", "rarity": 3, "roma_id": "chou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_itada": { "display_char": "頂", "rarity": 3, "roma_id": "itada", "dan_id": "u_dan", "gyo_id": "i_gyo" }, //
  // 漢字: 潮
  "kan_chou14": { "display_char": "潮", "rarity": 3, "roma_id": "chou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_shio2": { "display_char": "潮", "rarity": 3, "roma_id": "shio", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 塩(shio)と競合
  // 漢字: 賃
  "kan_chin": { "display_char": "賃", "rarity": 3, "roma_id": "chin", "dan_id": "i_dan", "gyo_id": "ta_gyo" },
  // 漢字: 痛
  "kan_tsuu2": { "display_char": "痛", "rarity": 3, "roma_id": "tsuu", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // 通(tsuu)と競合
  "kan_ita4": { "display_char": "痛", "rarity": 3, "roma_id": "ita", "dan_id": "a_dan", "gyo_id": "i_gyo" }, // 板(ita), 至(ita), 傷(ita)と競合
  // 漢字: 展
  "kan_ten6": { "display_char": "展", "rarity": 3, "roma_id": "ten", "dan_id": "e_dan", "gyo_id": "ta_gyo" }, // 天, 店, 点, 転, 典 と競合
  // 漢字: 討
  "kan_tou15": { "display_char": "討", "rarity": 3, "roma_id": "tou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_u15": { "display_char": "討", "rarity": 3, "roma_id": "u", "dan_id": "u_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 党
  "kan_tou16": { "display_char": "党", "rarity": 3, "roma_id": "tou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_nakama": { "display_char": "党", "rarity": 3, "roma_id": "nakama", "dan_id": "a_dan", "gyo_id": "na_gyo" },
  // 漢字: 糖
  "kan_tou17": { "display_char": "糖", "rarity": 3, "roma_id": "tou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  // 漢字: 届
  "kan_kai15": { "display_char": "届", "rarity": 3, "roma_id": "kai", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_todo": { "display_char": "届", "rarity": 3, "roma_id": "todo", "dan_id": "o_dan", "gyo_id": "ta_gyo" },
  // 漢字: 難
  "kan_nan7": { "display_char": "難", "rarity": 3, "roma_id": "nan", "dan_id": "a_dan", "gyo_id": "na_gyo" }, // 南, 男, 何 と競合
  "kan_gata": { "display_char": "難", "rarity": 3, "roma_id": "gata", "dan_id": "a_dan", "gyo_id": "ga_gyo" },
  "kan_muzu": { "display_char": "難", "rarity": 3, "roma_id": "muzu", "dan_id": "i_dan", "gyo_id": "ma_gyo" },
  // 漢字: 乳
  "kan_nyuu2": { "display_char": "乳", "rarity": 3, "roma_id": "nyuu", "dan_id": "u_dan", "gyo_id": "na_gyo" }, // 入(nyuu)と競合
  "kan_chichi2": { "display_char": "乳", "rarity": 3, "roma_id": "chichi", "dan_id": "i_dan", "gyo_id": "ta_gyo" }, // 父(chichi)と競合
  "kan_chi": { "display_char": "乳", "rarity": 3, "roma_id": "chi", "dan_id": "i_dan", "gyo_id": "ta_gyo" }, // 非常に多くの競合あり
  // 漢字: 認
  "kan_nin3": { "display_char": "認", "rarity": 3, "roma_id": "nin", "dan_id": "i_dan", "gyo_id": "na_gyo" }, // 人(nin), 任(nin)と競合
  "kan_mito": { "display_char": "認", "rarity": 3, "roma_id": "mito", "dan_id": "o_dan", "gyo_id": "ma_gyo" },
  // 漢字: 納
  "kan_nou4": { "display_char": "納", "rarity": 3, "roma_id": "nou", "dan_id": "o_dan", "gyo_id": "na_gyo" }, // 王, 農, 能 と競合
  "kan_na": { "display_char": "納", "rarity": 3, "roma_id": "na", "dan_id": "a_dan", "gyo_id": "na_gyo" }, // 多くの競合あり
  "kan_nan8": { "display_char": "納", "rarity": 3, "roma_id": "nan", "dan_id": "o_dan", "gyo_id": "na_gyo" }, // ...競合
  "kan_tou18": { "display_char": "納", "rarity": 3, "roma_id": "tou", "dan_id": "o_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_osa4": { "display_char": "納", "rarity": 3, "roma_id": "osa", "dan_id": "a_dan", "gyo_id": "o_gyo" }, // 治, 修, 圧, 押, 収 と競合
  // 漢字: 脳
  "kan_nou5": { "display_char": "脳", "rarity": 3, "roma_id": "nou", "dan_id": "o_dan", "gyo_id": "na_gyo" }, // ...競合
  "kan_dou8": { "display_char": "脳", "rarity": 3, "roma_id": "dou", "dan_id": "o_dan", "gyo_id": "da_gyo" }, // ...競合
  "kan_nazuki": { "display_char": "脳", "rarity": 3, "roma_id": "nazuki", "dan_id": "i_dan", "gyo_id": "na_gyo" },
  // 漢字: 派
  "kan_ha11": { "display_char": "派", "rarity": 3, "roma_id": "ha", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // ...競合
  // 漢字: 拝
  "kan_hai5": { "display_char": "拝", "rarity": 3, "roma_id": "hai", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // 入, 配, 敗, 灰 と競合
  "kan_oga": { "display_char": "拝", "rarity": 3, "roma_id": "oga", "dan_id": "a_dan", "gyo_id": "o_gyo" }, //
  // 漢字: 背
  "kan_hai6": { "display_char": "背", "rarity": 3, "roma_id": "hai", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // ...競合
  "kan_se": { "display_char": "背", "rarity": 3, "roma_id": "se", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // (競)
  "kan_somu": { "display_char": "背", "rarity": 3, "roma_id": "somu", "dan_id": "u_dan", "gyo_id": "sa_gyo" },
  // 漢字: 肺
  "kan_hai7": { "display_char": "肺", "rarity": 3, "roma_id": "hai", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // ...競合
  // 漢字: 俳
  "kan_hai8": { "display_char": "俳", "rarity": 3, "roma_id": "hai", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // ...競合
  // 漢字: 班
  "kan_han8": { "display_char": "班", "rarity": 3, "roma_id": "han", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // 半, 反, 板, 飯, 犯, 判, 版 と競合
  // 漢字: 晩
  "kan_ban6": { "display_char": "晩", "rarity": 3, "roma_id": "ban", "dan_id": "a_dan", "gyo_id": "ba_gyo" }, // 万, 番, 板, 判, 満 と競合
  // 漢字: 否
  "kan_hi15": { "display_char": "否", "rarity": 3, "roma_id": "hi", "dan_id": "i_dan", "gyo_id": "ha_gyo" }, // ...競合
  "kan_ina": { "display_char": "否", "rarity": 3, "roma_id": "ina", "dan_id": "a_dan", "gyo_id": "i_gyo" }, //
  "kan_iya": { "display_char": "否", "rarity": 3, "roma_id": "iya", "dan_id": "a_dan", "gyo_id": "i_gyo" }, //
  // 漢字: 批
  "kan_hi16": { "display_char": "批", "rarity": 3, "roma_id": "hi", "dan_id": "i_dan", "gyo_id": "ha_gyo" }, // ...競合
  // 漢字: 秘
  "kan_hi17": { "display_char": "秘", "rarity": 3, "roma_id": "hi", "dan_id": "i_dan", "gyo_id": "ha_gyo" }, // ...競合
  "kan_hi": { "display_char": "秘", "rarity": 3, "roma_id": "hi", "dan_id": "me_dan", "gyo_id": "ha_gyo" }, // 非常に多くの競合あり
  // 漢字: 腹
  "kan_fuku5": { "display_char": "腹", "rarity": 3, "roma_id": "fuku", "dan_id": "u_dan", "gyo_id": "ha_gyo" }, // 服, 福, 復, 複, 含 と競合
  "kan_hara2": { "display_char": "腹", "rarity": 3, "roma_id": "hara", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // 原(hara)と競合
  // 漢字: 奮
  "kan_fun2": { "display_char": "奮", "rarity": 3, "roma_id": "fun", "dan_id": "u_dan", "gyo_id": "ha_gyo" }, // 分(fun)と競合
  "kan_furu": { "display_char": "奮", "rarity": 3, "roma_id": "furu", "dan_id": "u_dan", "gyo_id": "ha_gyo" }, // (古, 降)
  // 漢字: 並
  "kan_hei3": { "display_char": "並", "rarity": 3, "roma_id": "hei", "dan_id": "e_dan", "gyo_id": "ha_gyo" }, // 病(hei), 平(hei)と競合
  "kan_hou8": { "display_char": "並", "rarity": 3, "roma_id": "hou", "dan_id": "o_dan", "gyo_id": "ha_gyo" }, // ...競合
  "kan_nami2": { "display_char": "並", "rarity": 3, "roma_id": "nami", "dan_id": "i_dan", "gyo_id": "na_gyo" }, // 波(nami)と競合
  "kan_nara": { "display_char": "並", "rarity": 3, "roma_id": "nara", "dan_id": "a_dan", "gyo_id": "na_gyo" }, // (習, 均)
  // 漢字: 陛
  "kan_hei4": { "display_char": "陛", "rarity": 3, "roma_id": "hei", "dan_id": "e_dan", "gyo_id": "ha_gyo" }, // ...競合
  // 漢字: 閉
  "kan_hei5": { "display_char": "閉", "rarity": 3, "roma_id": "hei", "dan_id": "e_dan", "gyo_id": "ha_gyo" }, // ...競合
  "kan_to19": { "display_char": "閉", "rarity": 3, "roma_id": "to", "dan_id": "i_dan", "gyo_id": "ta_gyo" }, // ...競合
  "kan_shi": { "display_char": "閉", "rarity": 3, "roma_id": "shi", "dan_id": "me_dan", "gyo_id": "sa_gyo" }, // 非常に多くの競合あり
  // 漢字: 片
  "kan_hen3": { "display_char": "片", "rarity": 3, "roma_id": "hen", "dan_id": "e_dan", "gyo_id": "ha_gyo" }, // 返(hen), 編(hen)と競合
  "kan_kata5": { "display_char": "片", "rarity": 3, "roma_id": "kata", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 形, 語, 方, 型, 固, 肩 と競合
  // 漢字: 補
  "kan_ho6": { "display_char": "補", "rarity": 3, "roma_id": "ho", "dan_id": "o_dan", "gyo_id": "ha_gyo" }, // 火, 歩, 布, 保, 浦 と競合
  "kan_ogina": { "display_char": "補", "rarity": 3, "roma_id": "ogina", "dan_id": "a_dan", "gyo_id": "o_gyo" }, //
  // 漢字: 暮
  "kan_bo2": { "display_char": "暮", "rarity": 3, "roma_id": "bo", "dan_id": "o_dan", "gyo_id": "ba_gyo" }, // 母(bo)と競合
  "kan_ku15": { "display_char": "暮", "rarity": 3, "roma_id": "ku", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 宝
  "kan_hou9": { "display_char": "宝", "rarity": 3, "roma_id": "hou", "dan_id": "o_dan", "gyo_id": "ha_gyo" }, // ...競合
  "kan_takara3": { "display_char": "宝", "rarity": 3, "roma_id": "takara", "dan_id": "a_dan", "gyo_id": "ta_gyo" }, // 貨(takara), 財(takara)と競合
  // 漢字: 訪
  "kan_hou10": { "display_char": "訪", "rarity": 3, "roma_id": "hou", "dan_id": "o_dan", "gyo_id": "ha_gyo" }, // ...競合
  "kan_otozu": { "display_char": "訪", "rarity": 3, "roma_id": "otozu", "dan_id": "u_dan", "gyo_id": "o_gyo" }, //
  "kan_tazu": { "display_char": "訪", "rarity": 3, "roma_id": "tazu", "dan_id": "u_dan", "gyo_id": "ta_gyo" },
  // 漢字: 亡
  "kan_bou4": { "display_char": "亡", "rarity": 3, "roma_id": "bou", "dan_id": "o_dan", "gyo_id": "ba_gyo" }, // 貿, 防, 夢 と競合
  "kan_mou4": { "display_char": "亡", "rarity": 3, "roma_id": "mou", "dan_id": "o_dan", "gyo_id": "ma_gyo" }, // 毛, 申, 設 と競合
  "kan_na7": { "display_char": "亡", "rarity": 3, "roma_id": "na", "dan_id": "i_dan", "gyo_id": "na_gyo" }, // ...競合
  // 漢字: 忘
  "kan_bou5": { "display_char": "忘", "rarity": 3, "roma_id": "bou", "dan_id": "o_dan", "gyo_id": "ba_gyo" }, // ...競合
  "kan_wasu": { "display_char": "忘", "rarity": 3, "roma_id": "wasu", "dan_id": "u_dan", "gyo_id": "wa_gyo" },
  // 漢字: 棒
  "kan_bou6": { "display_char": "棒", "rarity": 3, "roma_id": "bou", "dan_id": "o_dan", "gyo_id": "ba_gyo" }, // ...競合
  // 漢字: 枚
  "kan_mai4": { "display_char": "枚", "rarity": 3, "roma_id": "mai", "dan_id": "a_dan", "gyo_id": "ma_gyo" }, // 米(mai), 毎(mai), 参(mai)と競合
  // 漢字: 幕
  "kan_maku": { "display_char": "幕", "rarity": 3, "roma_id": "maku", "dan_id": "u_dan", "gyo_id": "ma_gyo" },
  "kan_baku3": { "display_char": "幕", "rarity": 3, "roma_id": "baku", "dan_id": "u_dan", "gyo_id": "ba_gyo" }, // 麦(baku), 博(baku)と競合
  // 漢字: 密
  "kan_mitsu": { "display_char": "密", "rarity": 3, "roma_id": "mitsu", "dan_id": "i_dan", "gyo_id": "ma_gyo" },
  "kan_hiso": { "display_char": "密", "rarity": 3, "roma_id": "hiso", "dan_id": "o_dan", "gyo_id": "ha_gyo" },
  // 漢字: 盟
  "kan_mei6": { "display_char": "盟", "rarity": 3, "roma_id": "mei", "dan_id": "e_dan", "gyo_id": "ma_gyo" }, // 名, 明, 鳴, 命, 迷 と競合
  // 漢字: 模
  "kan_mo2": { "display_char": "模", "rarity": 3, "roma_id": "mo", "dan_id": "o_dan", "gyo_id": "ma_gyo" }, // 持, 若, 盛 と競合
  "kan_bo3": { "display_char": "模", "rarity": 3, "roma_id": "bo", "dan_id": "o_dan", "gyo_id": "ba_gyo" }, // 母(bo), 暮(bo)と競合
  // 漢字: 訳
  "kan_yaku5": { "display_char": "訳", "rarity": 3, "roma_id": "yaku", "dan_id": "u_dan", "gyo_id": "ya_gyo" }, // 薬, 約, 益, 疫 と競合
  "kan_wake": { "display_char": "訳", "rarity": 3, "roma_id": "wake", "dan_id": "e_dan", "gyo_id": "wa_gyo" },
  // 漢字: 郵
  "kan_yuu8": { "display_char": "郵", "rarity": 3, "roma_id": "yuu", "dan_id": "u_dan", "gyo_id": "ya_gyo" }, // ...競合
  // 漢字: 優
  "kan_yuu9": { "display_char": "優", "rarity": 3, "roma_id": "yuu", "dan_id": "u_dan", "gyo_id": "ya_gyo" }, // ...競合
  "kan_yu5": { "display_char": "優", "rarity": 3, "roma_id": "yu", "dan_id": "u_dan", "gyo_id": "ya_gyo" }, // ...競合
  "kan_yasa2": { "display_char": "優", "rarity": 3, "roma_id": "yasa", "dan_id": "a_dan", "gyo_id": "ya_gyo" }, // 易(yasa)と競合
  "kan_sugu": { "display_char": "優", "rarity": 3, "roma_id": "sugu", "dan_id": "u_dan", "gyo_id": "sa_gyo" },
  // 漢字: 幼
  "kan_you12": { "display_char": "幼", "rarity": 3, "roma_id": "you", "dan_id": "o_dan", "gyo_id": "ya_gyo" }, // ...競合
  "kan_osana": { "display_char": "幼", "rarity": 3, "roma_id": "osana", "dan_id": "a_dan", "gyo_id": "o_gyo" }, //
  // 漢字: 欲
  "kan_yoku3": { "display_char": "欲", "rarity": 3, "roma_id": "yoku", "dan_id": "o_dan", "gyo_id": "ya_gyo" }, // 能(yoku), 浴(yoku)と競合
  "kan_ho": { "display_char": "欲", "rarity": 3, "roma_id": "ho", "dan_id": "shi_dan", "gyo_id": "ha_gyo" }, // 多くの競合あり
  // 漢字: 翌
  "kan_yoku4": { "display_char": "翌", "rarity": 3, "roma_id": "yoku", "dan_id": "o_dan", "gyo_id": "ya_gyo" }, // ...競合
  // 漢字: 乱
  "kan_ran": { "display_char": "乱", "rarity": 3, "roma_id": "ran", "dan_id": "a_dan", "gyo_id": "ra_gyo" },
  "kan_mida": { "display_char": "乱", "rarity": 3, "roma_id": "mida", "dan_id": "a_dan", "gyo_id": "ma_gyo" },
  // 漢字: 卵
  "kan_ran2": { "display_char": "卵", "rarity": 3, "roma_id": "ran", "dan_id": "a_dan", "gyo_id": "ra_gyo" }, // 乱(ran)と競合
  "kan_tamago": { "display_char": "卵", "rarity": 3, "roma_id": "tamago", "dan_id": "o_dan", "gyo_id": "ta_gyo" },
  // 漢字: 覧
  "kan_ran3": { "display_char": "覧", "rarity": 3, "roma_id": "ran", "dan_id": "a_dan", "gyo_id": "ra_gyo" }, // 乱(ran), 卵(ran)と競合
  "kan_mi11": { "display_char": "覧", "rarity": 3, "roma_id": "mi", "dan_id": "u_dan", "gyo_id": "ma_gyo" }, // ...競合
  // 漢字: 裏
  "kan_ri4": { "display_char": "裏", "rarity": 3, "roma_id": "ri", "dan_id": "i_dan", "gyo_id": "ra_gyo" }, // 里, 理, 利 と競合
  "kan_ura2": { "display_char": "裏", "rarity": 3, "roma_id": "ura", "dan_id": "a_dan", "gyo_id": "u_gyo" }, // 浦(ura)と競合
  // 漢字: 律
  "kan_ritsu3": { "display_char": "律", "rarity": 3, "roma_id": "ritsu", "dan_id": "i_dan", "gyo_id": "ra_gyo" }, // 立(ritsu), 率(ritsu)と競合
  "kan_richi": { "display_char": "律", "rarity": 3, "roma_id": "richi", "dan_id": "i_dan", "gyo_id": "ra_gyo" },
  // 漢字: 臨
  "kan_rin3": { "display_char": "臨", "rarity": 3, "roma_id": "rin", "dan_id": "i_dan", "gyo_id": "ra_gyo" }, // 林(rin), 輪(rin)と競合
  "kan_nozo": { "display_char": "臨", "rarity": 3, "roma_id": "nozo", "dan_id": "o_dan", "gyo_id": "na_gyo" }, // (除)
  // 漢字: 朗
  "kan_rou3": { "display_char": "朗", "rarity": 3, "roma_id": "rou", "dan_id": "o_dan", "gyo_id": "ra_gyo" }, // 老(rou), 労(rou)と競合
  "kan_hoga": { "display_char": "朗", "rarity": 3, "roma_id": "hoga", "dan_id": "a_dan", "gyo_id": "ha_gyo" },
  // 漢字: 論
  // (小学5年生パート5で既に出力済み)

  // --- 21. 漢字 (中学校・パート1/11) ---
  // Rarity: 4
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 挨
  "kan_ai4": { "display_char": "挨", "rarity": 4, "roma_id": "ai", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // 相, 愛, 哀 と競合
  // 漢字: 垢
  "kan_kou34": { "display_char": "垢", "rarity": 4, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_aka5": { "display_char": "垢", "rarity": 4, "roma_id": "aka", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // 赤, 紅, 明 と競合
  // 漢字: 亜
  "kan_a14": { "display_char": "亜", "rarity": 4, "roma_id": "a", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_tsugu": { "display_char": "亜", "rarity": 4, "roma_id": "tsugu", "dan_id": "u_dan", "gyo_id": "ta_gyo" },
  // 漢字: 庵
  "kan_an5": { "display_char": "庵", "rarity": 4, "roma_id": "an", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // 行, 安, 暗, 案 と競合
  "kan_iori": { "display_char": "庵", "rarity": 4, "roma_id": "iori", "dan_id": "i_dan", "gyo_id": "i_gyo" }, //
  // 漢字: 鞍
  "kan_an6": { "display_char": "鞍", "rarity": 4, "roma_id": "an", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_kura5": { "display_char": "鞍", "rarity": 4, "roma_id": "kura", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 暗, 庫, 倉, 蔵, 比 と競合
  // 漢字: 闇
  "kan_an7": { "display_char": "闇", "rarity": 4, "roma_id": "an", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_on5": { "display_char": "闇", "rarity": 4, "roma_id": "on", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // 音, 遠, 温, 隠, 怨 と競合
  "kan_yami": { "display_char": "闇", "rarity": 4, "roma_id": "yami", "dan_id": "i_dan", "gyo_id": "ya_gyo" },
  // 漢字: 曖
  "kan_ai5": { "display_char": "曖", "rarity": 4, "roma_id": "ai", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // 相, 愛, 哀, 挨 と競合
  // 漢字: 宛
  "kan_en14": { "display_char": "宛", "rarity": 4, "roma_id": "en", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // 円, 園, 遠, 塩, 圧, 演, 延, 沿, 炎, 怨, 媛, 縁, 艶 と競合
  "kan_ate": { "display_char": "宛", "rarity": 4, "roma_id": "ate", "dan_id": "e_dan", "gyo_id": "a_gyo" },

  // --- 22. 漢字 (中学校・パート2/11) ---
  // Rarity: 4
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 慰
  "kan_i20": { "display_char": "慰", "rarity": 4, "roma_id": "i", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_nagusa": { "display_char": "慰", "rarity": 4, "roma_id": "nagusa", "dan_id": "a_dan", "gyo_id": "na_gyo" },
  // 漢字: 椅
  "kan_i21": { "display_char": "椅", "rarity": 4, "roma_id": "i", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // ...競合
  // 漢字: 為
  // (小学6年生パート1で既に出力済み)
  // 漢字: 畏
  "kan_i22": { "display_char": "畏", "rarity": 4, "roma_id": "i", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_oso": { "display_char": "畏", "rarity": 4, "roma_id": "oso", "dan_id": "o_dan", "gyo_id": "o_gyo" }, //
  "kan_kashiko": { "display_char": "畏", "rarity": 4, "roma_id": "kashiko", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  // 漢字: 茨
  "kan_shi": { "display_char": "茨", "rarity": 4, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // 非常に多くの競合あり
  "kan_ibara": { "display_char": "茨", "rarity": 4, "roma_id": "ibara", "dan_id": "a_dan", "gyo_id": "i_gyo" }, //
  // 漢字: 咽
  "kan_in11": { "display_char": "咽", "rarity": 4, "roma_id": "in", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // 音, 引, 員, 院, 飲, 印, 隠, 韻 と競合
  "kan_etsu4": { "display_char": "咽", "rarity": 4, "roma_id": "etsu", "dan_id": "e_dan", "gyo_id": "e_gyo" }, // 悦, 越, 謁 と競合
  "kan_muse": { "display_char": "咽", "rarity": 4, "roma_id": "muse", "dan_id": "e_dan", "gyo_id": "ma_gyo" },
  "kan_nodo": { "display_char": "咽", "rarity": 4, "roma_id": "nodo", "dan_id": "o_dan", "gyo_id": "na_gyo" },
  // 漢字: 淫
  "kan_in12": { "display_char": "淫", "rarity": 4, "roma_id": "in", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_midara": { "display_char": "淫", "rarity": 4, "roma_id": "midara", "dan_id": "a_dan", "gyo_id": "ma_gyo" },
  // 漢字: 唄
  "kan_bai6": { "display_char": "唄", "rarity": 4, "roma_id": "bai", "dan_id": "e_dan", "gyo_id": "ba_gyo" }, // 貝, 売, 買, 倍, 梅 と競合
  "kan_uta4": { "display_char": "唄", "rarity": 4, "roma_id": "uta", "dan_id": "a_dan", "gyo_id": "u_gyo" }, // 歌, 詩, 欧 と競合
  // 漢字: 鬱
  "kan_utsu4": { "display_char": "鬱", "rarity": 4, "roma_id": "utsu", "dan_id": "u_dan", "gyo_id": "u_gyo" }, // 写, 現, 移 と競合
  "kan_u": { "display_char": "鬱", "rarity": 4, "roma_id": "u", "dan_id": "u_dan", "gyo_id": "u_gyo" }, // 多くの競合あり
  "kan_fusagu": { "display_char": "鬱", "rarity": 4, "roma_id": "fusagu", "dan_id": "u_dan", "gyo_id": "ha_gyo" },
  // 漢字: 畝
  "kan_hou11": { "display_char": "畝", "rarity": 4, "roma_id": "hou", "dan_id": "o_dan", "gyo_id": "ha_gyo" }, // ...競合
  "kan_mu9": { "display_char": "畝", "rarity": 4, "roma_id": "mu", "dan_id": "o_dan", "gyo_id": "ma_gyo" }, // ...競合
  "kan_se": { "display_char": "畝", "rarity": 4, "roma_id": "se", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // (競, 背)
  "kan_une": { "display_char": "畝", "rarity": 4, "roma_id": "une", "dan_id": "e_dan", "gyo_id": "u_gyo" }, //
  // 漢字: 浦
  // (小学6年生パート1で既に出力済み)
  // 漢字: 詠
  "kan_ei8": { "display_char": "詠", "rarity": 4, "roma_id": "ei", "dan_id": "e_dan", "gyo_id": "e_gyo" }, // 泳, 英, 栄, 衛, 影, 鋭 と競合
  "kan_yo": { "display_char": "詠", "rarity": 4, "roma_id": "yo", "dan_id": "o_dan", "gyo_id": "ya_gyo" }, // 非常に多くの競合あり
  "kan_uta": { "display_char": "詠", "rarity": 4, "roma_id": "uta", "dan_id": "a_dan", "gyo_id": "u_gyo" }, // 多くの競合あり

  // --- 23. 漢字 (中学校・パート3/11) ---
  // Rarity: 4
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 鋭
  // (小学6年生パート1で既に出力済み)
  // 漢字: 疫
  // (小学6年生パート1で既に出力済み)
  // 漢字: 悦
  // (小学6年生パート1で既に出力済み)
  // 漢字: 越
  // (小学6年生パート1で既に出力済み)
  // 漢字: 謁
  // (小学6年生パート1で既に出力済み)
  // 漢字: 閲
  "kan_etsu5": { "display_char": "閲", "rarity": 4, "roma_id": "etsu", "dan_id": "e_dan", "gyo_id": "e_gyo" }, // 悦, 越, 謁, 咽 と競合
  "kan_kemi": { "display_char": "閲", "rarity": 4, "roma_id": "kemi", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  // 漢字: 炎
  // (小学6年生パート1で既に出力済み)
  // 漢字: 怨
  // (小学6年生パート1で既に出力済み)
  // 漢字: 媛
  // (小学6年生パート1で既に出力済み)
  // 漢字: 園
  // (小学2年生パート1で既に出力済み)
  // 漢字: 堰
  "kan_en15": { "display_char": "堰", "rarity": 4, "roma_id": "en", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_seki8": { "display_char": "堰", "rarity": 4, "roma_id": "seki", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // ...競合
  // 漢字: 奄
  "kan_en16": { "display_char": "奄", "rarity": 4, "roma_id": "en", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_oo": { "display_char": "奄", "rarity": 4, "roma_id": "oo", "dan_id": "i_dan", "gyo_id": "o_gyo" }, // (多, 洪, 衆)
  // 漢字: 宴
  "kan_en17": { "display_char": "宴", "rarity": 4, "roma_id": "en", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_utage": { "display_char": "宴", "rarity": 4, "roma_id": "utage", "dan_id": "e_dan", "gyo_id": "u_gyo" }, //
  // 漢字: 延
  // (小学6年生パート1で既に出力済み)
  // 漢字: 怨
  // (小学6年生パート1で既に出力済み)
  // 漢字: 掩
  "kan_en18": { "display_char": "掩", "rarity": 4, "roma_id": "en", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_oo": { "display_char": "掩", "rarity": 4, "roma_id": "oo", "dan_id": "i_dan", "gyo_id": "o_gyo" }, // (多, 洪, 衆, 奄)
  // 漢字: 炎
  // (小学6年生パート1で既に出力済み)
  // 漢字: 猿
  "kan_en19": { "display_char": "猿", "rarity": 4, "roma_id": "en", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_saru2": { "display_char": "猿", "rarity": 4, "roma_id": "saru", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // 申(saru)と競合
  // 漢字: 縁
  // (小学6年生パート1で既に出力済み)
  // 漢字: 艶
  // (小学6年生パート1で既に出力済み)
  // 漢字: 塩
  // (小学4年生パート1で既に出力済み)
  // 漢字: 汚
  "kan_o15": { "display_char": "汚", "rarity": 4, "roma_id": "o", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_kega": { "display_char": "汚", "rarity": 4, "roma_id": "kega", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  "kan_yogo": { "display_char": "汚", "rarity": 4, "roma_id": "yogo", "dan_id": "o_dan", "gyo_id": "ya_gyo" },
  "kan_kita": { "display_char": "汚", "rarity": 4, "roma_id": "kita", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // (北, 来)
  // 漢字: 凹
  "kan_ou16": { "display_char": "凹", "rarity": 4, "roma_id": "ou", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // 王, 黄, 央, 横, 区, 圧, 押, 欧, 殴, 翁, 奥 と競合
  "kan_heko": { "display_char": "凹", "rarity": 4, "roma_id": "heko", "dan_id": "o_dan", "gyo_id": "ha_gyo" },
  "kan_boko": { "display_char": "凹", "rarity": 4, "roma_id": "boko", "dan_id": "o_dan", "gyo_id": "ba_gyo" },

  // --- 24. 漢字 (中学校・パート4/11) ---
  // Rarity: 4
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 央
  // (小学3年生パート1で既に出力済み)
  // 漢字: 奥
  // (小学6年生パート1で既に出力済み)
  // 漢字: 往
  // (小学5年生パート5で既に出力済み)
  // 漢字: 応
  // (小学5年生パート5で既に出力済み)
  // 漢字: 押
  // (小学6年生パート1で既に出力済み)
  // 漢字: 欧
  // (小学6年生パート1で既に出力済み)
  // 漢字: 殴
  // (小学6年生パート1で既に出力済み)
  // 漢字: 翁
  // (小学6年生パート1で既に出力済み)
  // 漢字: 沖
  "kan_chuu9": { "display_char": "沖", "rarity": 4, "roma_id": "chuu", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // 中, 虫, 昼, 注, 柱, 仲, 宙, 忠 と競合
  "kan_oki": { "display_char": "沖", "rarity": 4, "roma_id": "oki", "dan_id": "i_dan", "gyo_id": "o_gyo" }, //
  // 漢字: 憶
  "kan_oku6": { "display_char": "憶", "rarity": 4, "roma_id": "oku", "dan_id": "u_dan", "gyo_id": "o_gyo" }, // 後, 屋, 送, 億, 奥 と競合
  // 漢字: 虞
  "kan_gu4": { "display_char": "虞", "rarity": 4, "roma_id": "gu", "dan_id": "u_dan", "gyo_id": "ga_gyo" }, // 具(gu), 求(gu)と競合
  "kan_osore": { "display_char": "虞", "rarity": 4, "roma_id": "osore", "dan_id": "e_dan", "gyo_id": "o_gyo" }, //
  // 漢字: 乙
  "kan_otsu2": { "display_char": "乙", "rarity": 4, "roma_id": "otsu", "dan_id": "u_dan", "gyo_id": "o_gyo" }, // 越(otsu)と競合
  "kan_kinoto": { "display_char": "乙", "rarity": 4, "roma_id": "kinoto", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  // 漢字: 俺
  "kan_en20": { "display_char": "俺", "rarity": 4, "roma_id": "en", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_ore": { "display_char": "俺", "rarity": 4, "roma_id": "ore", "dan_id": "e_dan", "gyo_id": "o_gyo" }, //
  // 漢字: 卸
  // (小学6年生パート2で既に出力済み)
  // 漢字: 穏
  "kan_on6": { "display_char": "穏", "rarity": 4, "roma_id": "on", "dan_id": "o_dan", "gyo_id": "a_gyo" }, // 音, 遠, 温, 隠, 怨, 闇 と競合
  "kan_oda": { "display_char": "穏", "rarity": 4, "roma_id": "oda", "dan_id": "a_dan", "gyo_id": "o_gyo" }, //
  // 漢字: 仮
  // (小学5年生パート5で既に出力済み)
  // 漢字: 価
  // (小学5年生パート1で既に出力済み)
  // 漢字: 架
  "kan_ka25": { "display_char": "架", "rarity": 4, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kake2": { "display_char": "架", "rarity": 4, "roma_id": "kake", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 県(kake)と競合
  // 漢字: 華
  "kan_ka26": { "display_char": "華", "rarity": 4, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ke5": { "display_char": "華", "rarity": 4, "roma_id": "ke", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 気, 家, 毛, 化, 消, 希, 仮 と競合
  "kan_hana4": { "display_char": "華", "rarity": 4, "roma_id": "hana", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // 花, 話, 放, 鼻 と競合
  // 漢字: 嫁
  "kan_ka27": { "display_char": "嫁", "rarity": 4, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_yome2": { "display_char": "嫁", "rarity": 4, "roma_id": "yome", "dan_id": "e_dan", "gyo_id": "ya_gyo" }, // 婦(yome)と競合
  "kan_totsugu": { "display_char": "嫁", "rarity": 4, "roma_id": "totsugu", "dan_id": "u_dan", "gyo_id": "ta_gyo" },
  // 漢字: 暇
  "kan_ka28": { "display_char": "暇", "rarity": 4, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_hima": { "display_char": "暇", "rarity": 4, "roma_id": "hima", "dan_id": "a_dan", "gyo_id": "ha_gyo" },
  // 漢字: 架
  // (上記で出力済み)
  // 漢字: 禍
  "kan_ka29": { "display_char": "禍", "rarity": 4, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_wazawa2": { "display_char": "禍", "rarity": 4, "roma_id": "wazawa", "dan_id": "a_dan", "gyo_id": "wa_gyo" }, // 災(wazawa)と競合
  // 漢字: 靴
  "kan_ka30": { "display_char": "靴", "rarity": 4, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kutsu": { "display_char": "靴", "rarity": 4, "roma_id": "kutsu", "dan_id": "u_dan", "gyo_id": "ka_gyo" },
  // 漢字: 寡
  "kan_ka31": { "display_char": "寡", "rarity": 4, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 箇
  "kan_ka32": { "display_char": "箇", "rarity": 4, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ko15": { "display_char": "箇", "rarity": 4, "roma_id": "ko", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 稼
  "kan_ka33": { "display_char": "稼", "rarity": 4, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kase2": { "display_char": "稼", "rarity": 4, "roma_id": "kase", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 械(kase)と競合
  // 漢字: 株
  // (小学6年生パート2で既に出力済み)
  // 漢字: 掛
  "kan_kai16": { "display_char": "掛", "rarity": 4, "roma_id": "kai", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kei16": { "display_char": "掛", "rarity": 4, "roma_id": "kei", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ka34": { "display_char": "掛", "rarity": 4, "roma_id": "ka", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ka": { "display_char": "掛", "rarity": 4, "roma_id": "ka", "dan_id": "kari_dan", "gyo_id": "ka_gyo" }, // 非常に多くの競合あり
  // 漢字: 拐
  "kan_kai17": { "display_char": "拐", "rarity": 4, "roma_id": "kai", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: kaiketsu の kai? (意味不明瞭のため保留)
  // 漢字: 怪
  "kan_kai18": { "display_char": "怪", "rarity": 4, "roma_id": "kai", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ke6": { "display_char": "怪", "rarity": 4, "roma_id": "ke", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 気, 家, 毛, 化, 消, 希, 仮, 華 と競合
  "kan_ayashii": { "display_char": "怪", "rarity": 4, "roma_id": "ayashii", "dan_id": "i_dan", "gyo_id": "a_gyo" },
  // 漢字: 悔
  "kan_kai19": { "display_char": "悔", "rarity": 4, "roma_id": "kai", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ku": { "display_char": "悔", "rarity": 4, "roma_id": "ku", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // 多くの競合あり
  "kan_kuya": { "display_char": "悔", "rarity": 4, "roma_id": "kuya", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 懐
  "kan_kai20": { "display_char": "懐", "rarity": 4, "roma_id": "kai", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_e6": { "display_char": "懐", "rarity": 4, "roma_id": "e", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_futokoro": { "display_char": "懐", "rarity": 4, "roma_id": "futokoro", "dan_id": "o_dan", "gyo_id": "ha_gyo" },
  "kan_natsukashii": { "display_char": "懐", "rarity": 4, "roma_id": "natsukashii", "dan_id": "i_dan", "gyo_id": "na_gyo" },
  // 漢字: 慨
  "kan_gai5": { "display_char": "慨", "rarity": 4, "roma_id": "gai", "dan_id": "a_dan", "gyo_id": "ga_gyo" }, // 外, 害, 劾, 該 と競合
  // 漢字: 概
  "kan_gai6": { "display_char": "概", "rarity": 4, "roma_id": "gai", "dan_id": "a_dan", "gyo_id": "ga_gyo" }, // ...競合
  "kan_oomune": { "display_char": "概", "rarity": 4, "roma_id": "oomune", "dan_id": "e_dan", "gyo_id": "o_gyo" }, //
  // 漢字: 涯
  "kan_gai7": { "display_char": "涯", "rarity": 4, "roma_id": "gai", "dan_id": "a_dan", "gyo_id": "ga_gyo" }, // ...競合
  "kan_hata4": { "display_char": "涯", "rarity": 4, "roma_id": "hata", "dan_id": "e_dan", "gyo_id": "ha_gyo" }, // 畑, 旗, 機 と競合
  // 漢字: 蓋
  "kan_gai8": { "display_char": "蓋", "rarity": 4, "roma_id": "gai", "dan_id": "a_dan", "gyo_id": "ga_gyo" }, // ...競合
  "kan_kai21": { "display_char": "蓋", "rarity": 4, "roma_id": "kai", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_futa3": { "display_char": "蓋", "rarity": 4, "roma_id": "futa", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // 二(futa), 両(futa)と競合
  "kan_oo": { "display_char": "蓋", "rarity": 4, "roma_id": "oo", "dan_id": "i_dan", "gyo_id": "o_gyo" }, // (多, 洪, 衆, 奄, 掩)
  "kan_keda": { "display_char": "蓋", "rarity": 4, "roma_id": "keda", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  // 漢字: 該
  // (上記で出力済み)
  // 漢字: 劾
  // (小学6年生パート2で既に出力済み)
  // 漢字: 垣
  "kan_en21": { "display_char": "垣", "rarity": 4, "roma_id": "en", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // ...競合
  "kan_kaki": { "display_char": "垣", "rarity": 4, "roma_id": "kaki", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  // 漢字: 柿
  "kan_shi": { "display_char": "柿", "rarity": 4, "roma_id": "shi", "dan_id": "i_dan", "gyo_id": "sa_gyo" }, // 非常に多くの競合あり
  "kan_kaki2": { "display_char": "柿", "rarity": 4, "roma_id": "kaki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // 垣(kaki)と競合

  // --- 25. 漢字 (中学校・パート5/11) ---
  // Rarity: 4
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 角
  // (小学2年生パート1で既に出力済み)
  // 漢字: 赫
  "kan_kaku11": { "display_char": "赫", "rarity": 4, "roma_id": "kaku", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 画, 角, 客, 各, 覚, 格, 確, 隠, 拡, 閣, 革 と競合
  "kan_aka6": { "display_char": "赫", "rarity": 4, "roma_id": "aka", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // 赤, 紅, 明, 垢 と競合
  // 漢字: 較
  "kan_kaku12": { "display_char": "較", "rarity": 4, "roma_id": "kaku", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kou35": { "display_char": "較", "rarity": 4, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kura4": { "display_char": "較", "rarity": 4, "roma_id": "kura", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 暗, 庫, 倉, 蔵, 比, 鞍 と競合
  // 漢字: 郭
  "kan_kaku13": { "display_char": "郭", "rarity": 4, "roma_id": "kaku", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kuruwa": { "display_char": "郭", "rarity": 4, "roma_id": "kuruwa", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 閣
  // (小学6年生パート2で既に出力済み)
  // 漢字: 隔
  "kan_kaku14": { "display_char": "隔", "rarity": 4, "roma_id": "kaku", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_heda": { "display_char": "隔", "rarity": 4, "roma_id": "heda", "dan_id": "a_dan", "gyo_id": "ha_gyo" },
  // 漢字: 滑
  "kan_katsu4": { "display_char": "滑", "rarity": 4, "roma_id": "katsu", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 活, 合, 割 と競合
  "kan_kotsu2": { "display_char": "滑", "rarity": 4, "roma_id": "kotsu", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 骨(kotsu)と競合
  "kan_sube": { "display_char": "滑", "rarity": 4, "roma_id": "sube", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // (術)
  "kan_name": { "display_char": "滑", "rarity": 4, "roma_id": "name", "dan_id": "a_dan", "gyo_id": "na_gyo" },
  // 漢字: 褐
  "kan_katsu5": { "display_char": "褐", "rarity": 4, "roma_id": "katsu", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 轄
  "kan_katsu6": { "display_char": "轄", "rarity": 4, "roma_id": "katsu", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kusabi": { "display_char": "轄", "rarity": 4, "roma_id": "kusabi", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  // 漢字: 且
  "kan_sho11": { "display_char": "且", "rarity": 4, "roma_id": "sho", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_ka": { "display_char": "且", "rarity": 4, "roma_id": "ka", "dan_id": "tsu_dan", "gyo_id": "ka_gyo" }, // 非常に多くの競合あり
  // 漢字: 株
  // (小学6年生パート2で既に出力済み)
  // 漢字: 釜
  "kan_fu7": { "display_char": "釜", "rarity": 4, "roma_id": "fu", "dan_id": "u_dan", "gyo_id": "ha_gyo" }, // 父, 風, 歩, 布, 婦, 富 と競合
  "kan_kama": { "display_char": "釜", "rarity": 4, "roma_id": "kama", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // (構)
  // 漢字: 鎌
  "kan_ren3": { "display_char": "鎌", "rarity": 4, "roma_id": "ren", "dan_id": "e_dan", "gyo_id": "ra_gyo" }, // 練(ren), 連(ren)と競合
  "kan_ken17": { "display_char": "鎌", "rarity": 4, "roma_id": "ken", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kama2": { "display_char": "鎌", "rarity": 4, "roma_id": "kama", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 構(kama), 釜(kama)と競合
  // 漢字: 刈
  "kan_gai9": { "display_char": "刈", "rarity": 4, "roma_id": "gai", "dan_id": "a_dan", "gyo_id": "ga_gyo" }, // 外, 害, 劾, 該, 慨, 概, 涯, 蓋 と競合
  "kan_kai22": { "display_char": "刈", "rarity": 4, "roma_id": "kai", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ka35": { "display_char": "刈", "rarity": 4, "roma_id": "ka", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 甘
  "kan_kan17": { "display_char": "甘", "rarity": 4, "roma_id": "kan", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ama3": { "display_char": "甘", "rarity": 4, "roma_id": "ama", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // 天(ama), 雨(ama)と競合
  // 漢字: 汗
  "kan_kan18": { "display_char": "汗", "rarity": 4, "roma_id": "kan", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ase": { "display_char": "汗", "rarity": 4, "roma_id": "ase", "dan_id": "e_dan", "gyo_id": "a_gyo" },
  // 漢字: 缶
  "kan_kan19": { "display_char": "缶", "rarity": 4, "roma_id": "kan", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_fou": { "display_char": "缶", "rarity": 4, "roma_id": "fou", "dan_id": "u_dan", "gyo_id": "ha_gyo" },
  "kan_kama3": { "display_char": "缶", "rarity": 4, "roma_id": "kama", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 構, 釜, 鎌 と競合
  // 漢字: 肝
  // (小学6年生パート2で既に出力済み)
  // 漢字: 感
  // (小学3年生パート1で既に出力済み)
  // 漢字: 慣
  // (小学5年生パート5で既に出力済み)
  // 漢字: 換
  "kan_kan20": { "display_char": "換", "rarity": 4, "roma_id": "kan", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kae3": { "display_char": "換", "rarity": 4, "roma_id": "kae", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 帰(kae), 返(kae)と競合
  // 漢字: 敢
  "kan_kan21": { "display_char": "敢", "rarity": 4, "roma_id": "kan", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ae": { "display_char": "敢", "rarity": 4, "roma_id": "ae", "dan_id": "e_dan", "gyo_id": "a_gyo" },
  // 漢字: 款
  "kan_kan22": { "display_char": "款", "rarity": 4, "roma_id": "kan", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 干
  // (小学6年生パート2で既に出力済み)
  // 漢字: 幹
  // (小学5年生パート5で既に出力済み)
  // 漢字: 患
  "kan_kan23": { "display_char": "患", "rarity": 4, "roma_id": "kan", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_wazura": { "display_char": "患", "rarity": 4, "roma_id": "wazura", "dan_id": "a_dan", "gyo_id": "wa_gyo" },
  // 漢字: 憾
  "kan_kan24": { "display_char": "憾", "rarity": 4, "roma_id": "kan", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ura": { "display_char": "憾", "rarity": 4, "roma_id": "ura", "dan_id": "a_dan", "gyo_id": "u_gyo" }, // (浦, 裏)
  // 漢字: 換
  // (上記で出力済み)
  // 漢字: 敢
  // (上記で出力済み)
  // 漢字: 款
  // (上記で出力済み)
  // 漢字: 棺
  "kan_kan25": { "display_char": "棺", "rarity": 4, "roma_id": "kan", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 款
  // (上記で出力済み)
  // 漢字: 閑
  "kan_kan26": { "display_char": "閑", "rarity": 4, "roma_id": "kan", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_hima2": { "display_char": "閑", "rarity": 4, "roma_id": "hima", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // 暇(hima)と競合
  // 漢字: 陥
  "kan_kan27": { "display_char": "陥", "rarity": 4, "roma_id": "kan", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ochii": { "display_char": "陥", "rarity": 4, "roma_id": "ochii", "dan_id": "i_dan", "gyo_id": "o_gyo" }, //
  "kan_otoshii": { "display_char": "陥", "rarity": 4, "roma_id": "otoshii", "dan_id": "i_dan", "gyo_id": "o_gyo" }, //
  // 漢字: 含
  // (小学5年生パート5で既に出力済み)
  // 漢字: 玩
  "kan_gan10": { "display_char": "玩", "rarity": 4, "roma_id": "gan", "dan_id": "a_dan", "gyo_id": "ga_gyo" }, // 丸, 岩, 顔, 元, 岸, 願, 含 と競合
  "kan_moteaso": { "display_char": "玩", "rarity": 4, "roma_id": "moteaso", "dan_id": "o_dan", "gyo_id": "ma_gyo" },
  // 漢字: 頑
  "kan_gan11": { "display_char": "頑", "rarity": 4, "roma_id": "gan", "dan_id": "a_dan", "gyo_id": "ga_gyo" }, // ...競合
  "kan_kataku": { "display_char": "頑", "rarity": 4, "roma_id": "kataku", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 丸
  // (小学2年生パート1で既に出力済み)
  // 漢字: 岩
  // (小学2年生パート1で既に出力済み)
  // 漢字: 顔
  // (小学2年生パート1で既に出力済み)
  // 漢字: 願
  // (小学4年生パート1で既に出力済み)
  // 漢字: 企
  "kan_ki28": { "display_char": "企", "rarity": 4, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kuwada": { "display_char": "企", "rarity": 4, "roma_id": "kuwada", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  "kan_takura": { "display_char": "企", "rarity": 4, "roma_id": "takura", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  // 漢字: 伎
  "kan_ki29": { "display_char": "伎", "rarity": 4, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_gi5": { "display_char": "伎", "rarity": 4, "roma_id": "gi", "dan_id": "i_dan", "gyo_id": "ga_gyo" }, // 議, 技, 義, 疑 と競合
  "kan_waza": { "display_char": "伎", "rarity": 4, "roma_id": "waza", "dan_id": "a_dan", "gyo_id": "wa_gyo" }, // 多くの競合あり

  // --- 26. 漢字 (中学校・パート6/11) ---
  // Rarity: 4
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 岐
  "kan_ki30": { "display_char": "岐", "rarity": 4, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_gi6": { "display_char": "岐", "rarity": 4, "roma_id": "gi", "dan_id": "i_dan", "gyo_id": "ga_gyo" }, // 議, 技, 義, 疑, 伎 と競合
  // 漢字: 忌
  "kan_ki31": { "display_char": "忌", "rarity": 4, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_i": { "display_char": "忌", "rarity": 4, "roma_id": "i", "dan_id": "mu_dan", "gyo_id": "a_gyo" }, // 非常に多くの競合あり
  // 漢字: 奇
  "kan_ki32": { "display_char": "奇", "rarity": 4, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ku": { "display_char": "奇", "rarity": 4, "roma_id": "ku", "dan_id": "shi_dan", "gyo_id": "ka_gyo" }, // 多くの競合あり
  "kan_ayashii2": { "display_char": "奇", "rarity": 4, "roma_id": "ayashii", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // 怪(ayashii)と競合
  // 漢字: 祈
  // (小学5年生パート5で既に出力済み)
  // 漢字: 軌
  "kan_ki33": { "display_char": "軌", "rarity": 4, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 既
  "kan_ki34": { "display_char": "既", "rarity": 4, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_sude": { "display_char": "既", "rarity": 4, "roma_id": "sude", "dan_id": "e_dan", "gyo_id": "sa_gyo" },
  // 漢字: 気
  // (小学1年生で既に出力済み)
  // 漢字: 棄
  "kan_ki35": { "display_char": "棄", "rarity": 4, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_su14": { "display_char": "棄", "rarity": 4, "roma_id": "su", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // ...競合
  // 漢字: 棋
  "kan_ki36": { "display_char": "棋", "rarity": 4, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_go10": { "display_char": "棋", "rarity": 4, "roma_id": "go", "dan_id": "o_dan", "gyo_id": "ga_gyo" }, // ...競合
  // 漢字: 鬼
  "kan_ki37": { "display_char": "鬼", "rarity": 4, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_oni": { "display_char": "鬼", "rarity": 4, "roma_id": "oni", "dan_id": "i_dan", "gyo_id": "o_gyo" }, //
  // 漢字: 亀
  "kan_ki38": { "display_char": "亀", "rarity": 4, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kin7": { "display_char": "亀", "rarity": 4, "roma_id": "kin", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kame": { "display_char": "亀", "rarity": 4, "roma_id": "kame", "dan_id": "e_dan", "gyo_id": "ka_gyo" },
  // 漢字: 幾
  "kan_ki39": { "display_char": "幾", "rarity": 4, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_iku2": { "display_char": "幾", "rarity": 4, "roma_id": "iku", "dan_id": "u_dan", "gyo_id": "i_gyo" }, // 育(iku)と競合
  // 漢字: 棋
  // (上記で出力済み)
  // 漢字: 毀
  "kan_ki40": { "display_char": "毀", "rarity": 4, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kobo": { "display_char": "毀", "rarity": 4, "roma_id": "kobo", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  "kan_soshiru": { "display_char": "毀", "rarity": 4, "roma_id": "soshiru", "dan_id": "u_dan", "gyo_id": "sa_gyo" },
  // 漢字: 輝
  "kan_ki41": { "display_char": "輝", "rarity": 4, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kagaya": { "display_char": "輝", "rarity": 4, "roma_id": "kagaya", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 儀
  "kan_gi7": { "display_char": "儀", "rarity": 4, "roma_id": "gi", "dan_id": "i_dan", "gyo_id": "ga_gyo" }, // 議, 技, 義, 疑, 伎, 岐 と競合
  // 漢字: 戯
  "kan_gi8": { "display_char": "戯", "rarity": 4, "roma_id": "gi", "dan_id": "i_dan", "gyo_id": "ga_gyo" }, // ...競合
  "kan_ge5": { "display_char": "戯", "rarity": 4, "roma_id": "ge", "dan_id": "i_dan", "gyo_id": "ga_gyo" }, // 下, 夏, 外, 解 と競合
  "kan_tawa": { "display_char": "戯", "rarity": 4, "roma_id": "tawa", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  "kan_zare": { "display_char": "戯", "rarity": 4, "roma_id": "zare", "dan_id": "e_dan", "gyo_id": "za_gyo" },
  // 漢字: 擬
  "kan_gi9": { "display_char": "擬", "rarity": 4, "roma_id": "gi", "dan_id": "i_dan", "gyo_id": "ga_gyo" }, // ...競合
  "kan_gi": { "display_char": "擬", "rarity": 4, "roma_id": "gi", "dan_id": "shi_dan", "gyo_id": "ga_gyo" }, // 多くの競合あり
  "kan_nazora2": { "display_char": "擬", "rarity": 4, "roma_id": "nazora", "dan_id": "a_dan", "gyo_id": "na_gyo" }, // 準(nazora)と競合
  // 漢字: 欺
  "kan_gi10": { "display_char": "欺", "rarity": 4, "roma_id": "gi", "dan_id": "i_dan", "gyo_id": "ga_gyo" }, // ...競合
  "kan_azamu": { "display_char": "欺", "rarity": 4, "roma_id": "azamu", "dan_id": "u_dan", "gyo_id": "a_gyo" },
  // 漢字: 犠
  "kan_gi11": { "display_char": "犠", "rarity": 4, "roma_id": "gi", "dan_id": "i_dan", "gyo_id": "ga_gyo" }, // ...競合
  "kan_ki42": { "display_char": "犠", "rarity": 4, "roma_id": "ki", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // ...競合
  // 漢字: 菊
  "kan_kiku": { "display_char": "菊", "rarity": 4, "roma_id": "kiku", "dan_id": "u_dan", "gyo_id": "ka_gyo" },
  // 漢字: 吉
  "kan_kichi": { "display_char": "吉", "rarity": 4, "roma_id": "kichi", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  "kan_kitsu": { "display_char": "吉", "rarity": 4, "roma_id": "kitsu", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  "kan_yoshi2": { "display_char": "吉", "rarity": 4, "roma_id": "yoshi", "dan_id": "i_dan", "gyo_id": "ya_gyo" }, // 由(yoshi)と競合
  // 漢字: 喫
  "kan_kitsu2": { "display_char": "喫", "rarity": 4, "roma_id": "kitsu", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // 吉(kitsu)と競合
  // 漢字: 詰
  "kan_kitsu3": { "display_char": "詰", "rarity": 4, "roma_id": "kitsu", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // 吉, 喫 と競合
  "kan_tsu": { "display_char": "詰", "rarity": 4, "roma_id": "tsu", "dan_id": "mu_dan", "gyo_id": "ta_gyo" }, // 非常に多くの競合あり
  "kan_tsume2": { "display_char": "詰", "rarity": 4, "roma_id": "tsume", "dan_id": "e_dan", "gyo_id": "ta_gyo" }, // 冷(tsume)と競合
  // 漢字: 却
  "kan_kyaku2": { "display_char": "却", "rarity": 4, "roma_id": "kyaku", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 客(kyaku)と競合
  "kan_kae": { "display_char": "却", "rarity": 4, "roma_id": "kae", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // (帰, 返, 換)
  // 漢字: 脚
  "kan_kyaku3": { "display_char": "脚", "rarity": 4, "roma_id": "kyaku", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 客, 却 と競合
  "kan_kaku15": { "display_char": "脚", "rarity": 4, "roma_id": "kaku", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ashi2": { "display_char": "脚", "rarity": 4, "roma_id": "ashi", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // 足(ashi)と競合
  // 漢字: 及
  "kan_kyuu16": { "display_char": "及", "rarity": 4, "roma_id": "kyuu", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_oyo": { "display_char": "及", "rarity": 4, "roma_id": "oyo", "dan_id": "i_dan", "gyo_id": "o_gyo" }, // (泳)
  // 漢字: 旧
  // (小学5年生パート5で既に出力済み)
  // 漢字: 吸
  // (小学6年生パート2で既に出力済み)
  // 漢字: 宮
  // (小学3年生パート1で既に出力済み)
  // 漢字: 弓
  // (小学2年生パート1で既に出力済み)
  // 漢字: 急
  // (小学3年生パート1で既に出力済み)
  // 漢字: 球
  // (小学3年生パート1で既に出力済み)
  // 漢字: 救
  // (小学5年生パート1で既に出力済み)
  // 漢字: 給
  // (小学5年生パート1で既に出力済み)
  // 漢字: 窮
  "kan_kyuu17": { "display_char": "窮", "rarity": 4, "roma_id": "kyuu", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kyou19": { "display_char": "窮", "rarity": 4, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kiwa": { "display_char": "窮", "rarity": 4, "roma_id": "kiwa", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // (極)
  "kan_kiwa": { "display_char": "窮", "rarity": 4, "roma_id": "kiwa", "dan_id": "maru_dan", "gyo_id": "ka_gyo" }, // 競合

  // --- 27. 漢字 (中学校・パート7/11) ---
  // Rarity: 4
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 拒
  "kan_kyo5": { "display_char": "拒", "rarity": 4, "roma_id": "kyo", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 去, 居, 許, 挙 と競合
  "kan_ko16": { "display_char": "拒", "rarity": 4, "roma_id": "ko", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_koba": { "display_char": "拒", "rarity": 4, "roma_id": "koba", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 据
  "kan_kyo6": { "display_char": "据", "rarity": 4, "roma_id": "kyo", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_su": { "display_char": "据", "rarity": 4, "roma_id": "su", "dan_id": "e_dan", "gyo_id": "sa_gyo" }, // 非常に多くの競合あり
  // 漢字: 挙
  // (小学5年生パート1で既に出力済み)
  // 漢字: 虚
  "kan_kyo7": { "display_char": "虚", "rarity": 4, "roma_id": "kyo", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ko17": { "display_char": "虚", "rarity": 4, "roma_id": "ko", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_muna": { "display_char": "虚", "rarity": 4, "roma_id": "muna", "dan_id": "a_dan", "gyo_id": "ma_gyo" }, // (胸)
  // 漢字: 許
  // (小学4年生パート1で既に出力済み)
  // 漢字: 距
  "kan_kyo8": { "display_char": "距", "rarity": 4, "roma_id": "kyo", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_heda2": { "display_char": "距", "rarity": 4, "roma_id": "heda", "dan_id": "a_dan", "gyo_id": "ha_gyo" }, // 隔(heda)と競合
  // 漢字: 鋸
  "kan_kyo9": { "display_char": "鋸", "rarity": 4, "roma_id": "kyo", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ko18": { "display_char": "鋸", "rarity": 4, "roma_id": "ko", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_nokogiri": { "display_char": "鋸", "rarity": 4, "roma_id": "nokogiri", "dan_id": "i_dan", "gyo_id": "na_gyo" },
  // 漢字: 漁
  // (小学5年生パート1で既に出力済み)
  // 漢字: 御
  "kan_gyo4": { "display_char": "御", "rarity": 4, "roma_id": "gyo", "dan_id": "o_dan", "gyo_id": "ga_gyo" }, // 魚(gyo), 漁(gyo)と競合
  "kan_go11": { "display_char": "御", "rarity": 4, "roma_id": "go", "dan_id": "o_dan", "gyo_id": "ga_gyo" }, // ...競合
  "kan_o": { "display_char": "御", "rarity": 4, "roma_id": "o", "dan_id": "n_dan", "gyo_id": "o_gyo" }, // 非常に多くの競合あり
  "kan_on": { "display_char": "御", "rarity": 4, "roma_id": "on", "dan_id": "n_dan", "gyo_id": "o_gyo" }, // 多くの競合あり
  // 漢字: 凶
  "kan_kyou20": { "display_char": "凶", "rarity": 4, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_wazawa3": { "display_char": "凶", "rarity": 4, "roma_id": "wazawa", "dan_id": "a_dan", "gyo_id": "wa_gyo" }, // 災(wazawa), 禍(wazawa)と競合
  // 漢字: 叫
  "kan_kyou21": { "display_char": "叫", "rarity": 4, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_sake": { "display_char": "叫", "rarity": 4, "roma_id": "sake", "dan_id": "u_dan", "gyo_id": "sa_gyo" }, // (号, 酒)
  // 漢字: 峡
  "kan_kyou22": { "display_char": "峡", "rarity": 4, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kou36": { "display_char": "峡", "rarity": 4, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kai": { "display_char": "峡", "rarity": 4, "roma_id": "kai", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // 多くの競合あり
  // 漢字: 恐
  "kan_kyou23": { "display_char": "恐", "rarity": 4, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_oso2": { "display_char": "恐", "rarity": 4, "roma_id": "oso", "dan_id": "o_dan", "gyo_id": "o_gyo" }, // 畏(oso)と競合
  // 漢字: 恭
  "kan_kyou24": { "display_char": "恭", "rarity": 4, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_uyauya": { "display_char": "恭", "rarity": 4, "roma_id": "uyauya", "dan_id": "a_dan", "gyo_id": "u_gyo" }, //
  // 漢字: 挟
  "kan_kyou25": { "display_char": "挟", "rarity": 4, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_shou35": { "display_char": "挟", "rarity": 4, "roma_id": "shou", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // ...競合
  "kan_hasa": { "display_char": "挟", "rarity": 4, "roma_id": "hasa", "dan_id": "a_dan", "gyo_id": "ha_gyo" },
  "kan_sashi": { "display_char": "挟", "rarity": 4, "roma_id": "sashi", "dan_id": "i_dan", "gyo_id": "sa_gyo" },
  "kan_waki": { "display_char": "挟", "rarity": 4, "roma_id": "waki", "dan_id": "i_dan", "gyo_id": "wa_gyo" }, // (弁)

  // --- 28. 漢字 (中学校・パート8/11) ---
  // Rarity: 4
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 狭
  "kan_kyou26": { "display_char": "狭", "rarity": 4, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kou37": { "display_char": "狭", "rarity": 4, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_seba": { "display_char": "狭", "rarity": 4, "roma_id": "seba", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  "kan_sema": { "display_char": "狭", "rarity": 4, "roma_id": "sema", "dan_id": "a_dan", "gyo_id": "sa_gyo" },
  // 漢字: 脅
  "kan_kyou27": { "display_char": "脅", "rarity": 4, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_obiya": { "display_char": "脅", "rarity": 4, "roma_id": "obiya", "dan_id": "a_dan", "gyo_id": "o_gyo" }, //
  // 漢字: 矯
  "kan_kyou28": { "display_char": "矯", "rarity": 4, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ta": { "display_char": "矯", "rarity": 4, "roma_id": "ta", "dan_id": "me_dan", "gyo_id": "ta_gyo" }, // 非常に多くの競合あり

  // --- 29. 漢字 (中学校・パート9/11) ---
  // Rarity: 4
  // 1ユニット1読み (アプローチA) に基づき、主要な読みを個別に定義

  // 漢字: 響
  "kan_kyou29": { "display_char": "響", "rarity": 4, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_hibi": { "display_char": "響", "rarity": 4, "roma_id": "hibi", "dan_id": "i_dan", "gyo_id": "ha_gyo" },
  // 漢字: 驚
  "kan_kyou30": { "display_char": "驚", "rarity": 4, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_kei17": { "display_char": "驚", "rarity": 4, "roma_id": "kei", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_odoro": { "display_char": "驚", "rarity": 4, "roma_id": "odoro", "dan_id": "o_dan", "gyo_id": "o_gyo" }, //
  // 漢字: 仰
  "kan_gyou4": { "display_char": "仰", "rarity": 4, "roma_id": "gyou", "dan_id": "o_dan", "gyo_id": "ga_gyo" }, // 形, 行, 業 と競合
  "kan_kou38": { "display_char": "仰", "rarity": 4, "roma_id": "kou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // ...競合
  "kan_ao": { "display_char": "仰", "rarity": 4, "roma_id": "ao", "dan_id": "i_dan", "gyo_id": "a_gyo" }, // (青)
  "kan_oo": { "display_char": "仰", "rarity": 4, "roma_id": "oo", "dan_id": "u_dan", "gyo_id": "o_gyo" }, // 多くの競合あり
  // 漢字: 駆
  "kan_ku2": { "display_char": "駆", "rarity": 4, "roma_id": "ku", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 競合あり
  "kan_ka": { "display_char": "駆", "rarity": 4, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 競合あり
  // 漢字: 屈
  "kan_kutsu": { "display_char": "屈", "rarity": 4, "roma_id": "kutsu", "dan_id": "u_dan", "gyo_id": "ka_gyo" },
  // 漢字: 掘
  "kan_kutsu2": { "display_char": "掘", "rarity": 4, "roma_id": "kutsu", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 競合
  "kan_ho": { "display_char": "掘", "rarity": 4, "roma_id": "ho", "dan_id": "o_dan", "gyo_id": "ha_gyo" }, // 競合あり
  // 漢字: 繰
  "kan_so": { "display_char": "繰", "rarity": 4, "roma_id": "so", "dan_id": "o_dan", "gyo_id": "sa_gyo" }, // 競合あり
  "kan_ku": { "display_char": "繰", "rarity": 4, "roma_id": "ku", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 競合あり
  // 漢字: 恵
  "kan_kei": { "display_char": "恵", "rarity": 4, "roma_id": "kei", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // 競合あり
  "kan_e": { "display_char": "恵", "rarity": 4, "roma_id": "e", "dan_id": "e_dan", "gyo_id": "a_gyo" }, // 競合あり
  "kan_megu": { "display_char": "恵", "rarity": 4, "roma_id": "megu", "dan_id": "u_dan", "gyo_id": "ma_gyo" },
  // 漢字: 傾
  "kan_kei2": { "display_char": "傾", "rarity": 4, "roma_id": "kei", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // 競合
  "kan_katamu": { "display_char": "傾", "rarity": 4, "roma_id": "katamu", "dan_id": "u_dan", "gyo_id": "ka_gyo" },
  // 漢字: 継
  "kan_kei3": { "display_char": "継", "rarity": 4, "roma_id": "kei", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // 競合
  "kan_tsu": { "display_char": "継", "rarity": 4, "roma_id": "tsu", "dan_id": "u_dan", "gyo_id": "ta_gyo" }, // 競合あり
  // 漢字: 迎
  "kan_gei": { "display_char": "迎", "rarity": 4, "roma_id": "gei", "dan_id": "i_dan", "gyo_id": "ga_gyo" },
  "kan_muka": { "display_char": "迎", "rarity": 4, "roma_id": "muka", "dan_id": "a_dan", "gyo_id": "ma_gyo" },
  // 漢字: 撃
  "kan_geki": { "display_char": "撃", "rarity": 4, "roma_id": "geki", "dan_id": "i_dan", "gyo_id": "ga_gyo" },
  "kan_u": { "display_char": "撃", "rarity": 4, "roma_id": "u", "dan_id": "u_dan", "gyo_id": "a_gyo" }, // 競合あり

  // --- 30. 漢字 (中学校・パート10/11) ---
  // Rarity: 4
  // 漢字: 肩
  "kan_ken": { "display_char": "肩", "rarity": 4, "roma_id": "ken", "dan_id": "e_dan", "gyo_id": "ka_gyo" },
  "kan_kata": { "display_char": "肩", "rarity": 4, "roma_id": "kata", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 兼
  "kan_ken2": { "display_char": "兼", "rarity": 4, "roma_id": "ken", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 競合
  "kan_ka": { "display_char": "兼", "rarity": 4, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 競合あり
  // 漢字: 剣
  "kan_ken3": { "display_char": "剣", "rarity": 4, "roma_id": "ken", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 競合
  "kan_tsurugi": { "display_char": "剣", "rarity": 4, "roma_id": "tsurugi", "dan_id": "i_dan", "gyo_id": "ta_gyo" },
  // 漢字: 圏
  "kan_ken4": { "display_char": "圏", "rarity": 4, "roma_id": "ken", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 競合
  // 漢字: 堅
  "kan_ken5": { "display_char": "堅", "rarity": 4, "roma_id": "ken", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 競合
  "kan_kata": { "display_char": "堅", "rarity": 4, "roma_id": "kata", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 競合あり
  // 漢字: 遣
  "kan_ken6": { "display_char": "遣", "rarity": 4, "roma_id": "ken", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 競合
  "kan_tsuka": { "display_char": "遣", "rarity": 4, "roma_id": "tsuka", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  // 漢字: 賢
  "kan_ken7": { "display_char": "賢", "rarity": 4, "roma_id": "ken", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 競合
  "kan_kashiko": { "display_char": "賢", "rarity": 4, "roma_id": "kashiko", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  // 漢字: 軒
  "kan_ken8": { "display_char": "軒", "rarity": 4, "roma_id": "ken", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 競合
  "kan_noki": { "display_char": "軒", "rarity": 4, "roma_id": "noki", "dan_id": "i_dan", "gyo_id": "na_gyo" },
  // 漢字: 顕
  "kan_ken9": { "display_char": "顕", "rarity": 4, "roma_id": "ken", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 競合
  "kan_arawa": { "display_char": "顕", "rarity": 4, "roma_id": "arawa", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  // 漢字: 幻
  "kan_gen": { "display_char": "幻", "rarity": 4, "roma_id": "gen", "dan_id": "e_dan", "gyo_id": "ga_gyo" },
  "kan_maboroshi": { "display_char": "幻", "rarity": 4, "roma_id": "maboroshi", "dan_id": "i_dan", "gyo_id": "ma_gyo" },
  // 漢字: 孤
  "kan_ko2": { "display_char": "孤", "rarity": 4, "roma_id": "ko", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 競合あり
  // 漢字: 弧
  "kan_ko3": { "display_char": "弧", "rarity": 4, "roma_id": "ko", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 競合
  // 漢字: 枯
  "kan_ko4": { "display_char": "枯", "rarity": 4, "roma_id": "ko", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 競合
  "kan_ka": { "display_char": "枯", "rarity": 4, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 競合あり
  // 漢字: 誇
  "kan_ko5": { "display_char": "誇", "rarity": 4, "roma_id": "ko", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 競合
  "kan_hoko": { "display_char": "誇", "rarity": 4, "roma_id": "hoko", "dan_id": "o_dan", "gyo_id": "ha_gyo" },
  // 漢字: 雇
  "kan_ko6": { "display_char": "雇", "rarity": 4, "roma_id": "ko", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 競合
  "kan_yato": { "display_char": "雇", "rarity": 4, "roma_id": "yato", "dan_id": "o_dan", "gyo_id": "ya_gyo" },
  // 漢字: 顧
  "kan_ko7": { "display_char": "顧", "rarity": 4, "roma_id": "ko", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 競合
  "kan_kaeri": { "display_char": "顧", "rarity": 4, "roma_id": "kaeri", "dan_id": "i_dan", "gyo_id": "ka_gyo" },
  // 漢字: 鼓
  "kan_ko8": { "display_char": "鼓", "rarity": 4, "roma_id": "ko", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 競合
  "kan_tsuzumi": { "display_char": "鼓", "rarity": 4, "roma_id": "tsuzumi", "dan_id": "i_dan", "gyo_id": "ta_gyo" },
  // 漢字: 互
  "kan_go": { "display_char": "互", "rarity": 4, "roma_id": "go", "dan_id": "o_dan", "gyo_id": "ga_gyo" },
  "kan_tagai": { "display_char": "互", "rarity": 4, "roma_id": "tagai", "dan_id": "i_dan", "gyo_id": "ta_gyo" },
  // 漢字: 呉
  "kan_go2": { "display_char": "呉", "rarity": 4, "roma_id": "go", "dan_id": "o_dan", "gyo_id": "ga_gyo" }, // 競合
  "kan_ku": { "display_char": "呉", "rarity": 4, "roma_id": "ku", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 競合あり
  // 漢字: 娯
  "kan_go3": { "display_char": "娯", "rarity": 4, "roma_id": "go", "dan_id": "o_dan", "gyo_id": "ga_gyo" }, // 競合
  // 漢字: 御
  "kan_gyo": { "display_char": "御", "rarity": 4, "roma_id": "gyo", "dan_id": "o_dan", "gyo_id": "ga_gyo" },
  "kan_go4": { "display_char": "御", "rarity": 4, "roma_id": "go", "dan_id": "o_dan", "gyo_id": "ga_gyo" }, // 競合
  "kan_on": { "display_char": "御", "rarity": 4, "roma_id": "on", "dan_id": "n_dan", "gyo_id": "a_gyo" },

  // --- 31. 漢字 (中学校・パート11/11) ---
  // Rarity: 4
  // 漢字: 悟
  "kan_go5": { "display_char": "悟", "rarity": 4, "roma_id": "go", "dan_id": "o_dan", "gyo_id": "ga_gyo" }, // 競合
  "kan_sato": { "display_char": "悟", "rarity": 4, "roma_id": "sato", "dan_id": "o_dan", "gyo_id": "sa_gyo" },
  // 漢字: 碁
  "kan_go6": { "display_char": "碁", "rarity": 4, "roma_id": "go", "dan_id": "o_dan", "gyo_id": "ga_gyo" }, // 競合
  // 漢字: 勾
  "kan_kou": { "display_char": "勾", "rarity": 4, "roma_id": "kou", "dan_id": "u_dan", "gyo_id": "ka_gyo" },
  // 漢字: 肯
  "kan_kou2": { "display_char": "肯", "rarity": 4, "roma_id": "kou", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 競合
  // 漢字: 洪
  "kan_kou3": { "display_char": "洪", "rarity": 4, "roma_id": "kou", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 競合
  // 漢字: 貢
  "kan_kou4": { "display_char": "貢", "rarity": 4, "roma_id": "kou", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 競合
  "kan_ku": { "display_char": "貢", "rarity": 4, "roma_id": "ku", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 競合あり
  "kan_mitsu": { "display_char": "貢", "rarity": 4, "roma_id": "mitsu", "dan_id": "u_dan", "gyo_id": "ma_gyo" },
  // 漢字: 溝
  "kan_kou5": { "display_char": "溝", "rarity": 4, "roma_id": "kou", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 競合
  "kan_mizo": { "display_char": "溝", "rarity": 4, "roma_id": "mizo", "dan_id": "o_dan", "gyo_id": "ma_gyo" },
  // 漢字: 甲
  "kan_kou6": { "display_char": "甲", "rarity": 4, "roma_id": "kou", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 競合
  "kan_kan": { "display_char": "甲", "rarity": 4, "roma_id": "kan", "dan_id": "n_dan", "gyo_id": "ka_gyo" },
  // 漢字: 坑
  "kan_kou7": { "display_char": "坑", "rarity": 4, "roma_id": "kou", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 競合
  // 漢字: 耕
  "kan_kou8": { "display_char": "耕", "rarity": 4, "roma_id": "kou", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 競合
  "kan_tagaya": { "display_char": "耕", "rarity": 4, "roma_id": "tagaya", "dan_id": "a_dan", "gyo_id": "ta_gyo" },
  // 漢字: 講
  "kan_kou9": { "display_char": "講", "rarity": 4, "roma_id": "kou", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 競合
  // 漢字: 荒
  "kan_kou10": { "display_char": "荒", "rarity": 4, "roma_id": "kou", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 競合
  "kan_ara": { "display_char": "荒", "rarity": 4, "roma_id": "ara", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  "kan_a": { "display_char": "荒", "rarity": 4, "roma_id": "a", "dan_id": "a_dan", "gyo_id": "a_gyo" }, // 競合あり
  // 漢字: 項
  "kan_kou11": { "display_char": "項", "rarity": 4, "roma_id": "kou", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 競合
  // 漢字: 香
  "kan_kou12": { "display_char": "香", "rarity": 4, "roma_id": "kou", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 競合
  "kan_kyou31": { "display_char": "香", "rarity": 4, "roma_id": "kyou", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 競合
  "kan_ka": { "display_char": "香", "rarity": 4, "roma_id": "ka", "dan_id": "a_dan", "gyo_id": "ka_gyo" }, // 競合あり
  "kan_kao": { "display_char": "香", "rarity": 4, "roma_id": "kao", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  // 漢字: 稿
  "kan_kou13": { "display_char": "稿", "rarity": 4, "roma_id": "kou", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 競合
  // 漢字: 豪
  "kan_gou": { "display_char": "豪", "rarity": 4, "roma_id": "gou", "dan_id": "u_dan", "gyo_id": "ga_gyo" },
  // 漢字: 劾
  "kan_gai": { "display_char": "劾", "rarity": 4, "roma_id": "gai", "dan_id": "i_dan", "gyo_id": "ga_gyo" },
  // 漢字: 穀
  "kan_koku": { "display_char": "穀", "rarity": 4, "roma_id": "koku", "dan_id": "u_dan", "gyo_id": "ka_gyo" },
  // 漢字: 酷
  "kan_koku2": { "display_char": "酷", "rarity": 4, "roma_id": "koku", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 競合
  "kan_hido": { "display_char": "酷", "rarity": 4, "roma_id": "hido", "dan_id": "o_dan", "gyo_id": "ha_gyo" },
  // 漢字: 獄
  "kan_goku": { "display_char": "獄", "rarity": 4, "roma_id": "goku", "dan_id": "u_dan", "gyo_id": "ga_gyo" },
  // 漢字: 駒
  "kan_ku": { "display_char": "駒", "rarity": 4, "roma_id": "ku", "dan_id": "u_dan", "gyo_id": "ka_gyo" }, // 競合あり
  "kan_koma": { "display_char": "駒", "rarity": 4, "roma_id": "koma", "dan_id": "a_dan", "gyo_id": "ka_gyo" },
  // 漢字: 込
  "kan_ko": { "display_char": "込", "rarity": 4, "roma_id": "ko", "dan_id": "o_dan", "gyo_id": "ka_gyo" }, // 競合あり
  // 漢字: 頃
  "kan_kei4": { "display_char": "頃", "rarity": 4, "roma_id": "kei", "dan_id": "i_dan", "gyo_id": "ka_gyo" }, // 競合
  "kan_koro": { "display_char": "頃", "rarity": 4, "roma_id": "koro", "dan_id": "o_dan", "gyo_id": "ka_gyo" },
  // 漢字: 墾
  "kan_kon": { "display_char": "墾", "rarity": 4, "roma_id": "kon", "dan_id": "n_dan", "gyo_id": "ka_gyo" },
  // 漢字: 婚
  "kan_kon2": { "display_char": "婚", "rarity": 4, "roma_id": "kon", "dan_id": "n_dan", "gyo_id": "ka_gyo" }, // 競合
  // 漢字: 恨
  "kan_kon3": { "display_char": "恨", "rarity": 4, "roma_id": "kon", "dan_id": "n_dan", "gyo_id": "ka_gyo" }, // 競合
  "kan_ura": { "display_char": "恨", "rarity": 4, "roma_id": "ura", "dan_id": "a_dan", "gyo_id": "a_gyo" },
  // 漢字: 懇
  "kan_kon4": { "display_char": "懇", "rarity": 4, "roma_id": "kon", "dan_id": "n_dan", "gyo_id": "ka_gyo" }, // 競合
  "kan_nengo": { "display_char": "懇", "rarity": 4, "roma_id": "nengo", "dan_id": "o_dan", "gyo_id": "na_gyo" },
  // 漢字: 昆
  "kan_kon5": { "display_char": "昆", "rarity": 4, "roma_id": "kon", "dan_id": "n_dan", "gyo_id": "ka_gyo" }, // 競合
  // 漢字: 紺
  "kan_kon6": { "display_char": "紺", "rarity": 4, "roma_id": "kon", "dan_id": "n_dan", "gyo_id": "ka_gyo" }, // 競合
  // 漢字: 魂
  "kan_kon7": { "display_char": "魂", "rarity": 4, "roma_id": "kon", "dan_id": "n_dan", "gyo_id": "ka_gyo" }, // 競合
  "kan_tamashii": { "display_char": "魂", "rarity": 4, "roma_id": "tamashii", "dan_id": "i_dan", "gyo_id": "ta_gyo" },


  // --- 99. UR (最高レアリティ) ---
  // Rarity: 5
  // プロット 3. (ワールド3ボス) および 11.2 (インフレ対策) に基づき定義
  "kan_ryuu":   { "display_char": "竜", "rarity": 5, "roma_id": "ryuu", "dan_id": "u_dan", "gyo_id": "ra_gyo" },
  "kan_ken10":   { "display_char": "剣", "rarity": 5, "roma_id": "ken", "dan_id": "e_dan", "gyo_id": "ka_gyo" }, // 競合
  "kan_ma":     { "display_char": "魔", "rarity": 5, "roma_id": "ma", "dan_id": "a_dan", "gyo_id": "ma_gyo" }, // 競合あり
  "kan_ou":     { "display_char": "王", "rarity": 5, "roma_id": "ou", "dan_id": "u_dan", "gyo_id": "a_gyo" } // 競合あり

};
};