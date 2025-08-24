# Prompts Extraction Index

Generated on: **8/23/2025, 7:38:52 PM**

## Extraction Summary

| Metric | Value |
|--------|-------|
| Total Workflows | 62 |
| Workflows with Prompts | 40 |
| Total AI Prompts | 59 |
| Workflows without Prompts | 22 |

## Generated Structure

```
src/prompts/
├── Basic/
│   ├── askForUserName/
│   │   ├── ListenTheName.prompt.4.md
│   │   └── NamePleasantries.prompt.1.md
│   ├── askForUserLocation/
│   │   ├── Acknowledgement.prompt.1.md
│   │   └── Apologies.prompt.1.md
│   ├── askForUserPhone/
│   │   └── validateNumber.prompt.3.md
│   └── getPopAuthorization/
│       ├── makeQuestion.prompt.6.md
│       └── handleResult.prompt.2.md
├── brilla/
│   ├── askForDocument/
│   │   ├── FindForData.prompt.4.md
│   │   └── FindForData.prompt.7.md
│   ├── askForNationalId/
│   │   └── Reassurance.prompt.3.md
│   └── askForBillNumber/
│       └── Reassurance.prompt.3.md
├── Estilos_de_motos/
│   ├── RetrieveMotoStyle/
│   │   ├── SearchForStyle.prompt.6.md
│   │   └── generateStyleOptionList.prompt.3.md
│   └── HandleOptionList/
│       ├── ValidateExistence.prompt.2.md
│       └── handleFailure.prompt.2.md
├── flujos_de_credito/
│   ├── financialStudyMessage/
│   │   └── financiera_message.prompt.3.md
│   ├── askForReportedStatus/
│   │   └── MadeQuestion.prompt.4.md
│   ├── askForJobContractType/
│   │   └── UnderstandAnswer.prompt.4.md
│   └── CupoBrillaProfile/
│       └── notifyPriceChange.prompt.2.md
├── flujos_de_motos/
│   ├── printMotoCard/
│   │   └── PrintCard.prompt.1.md
│   └── RetrieveMoto/
│       └── searchingFor.prompt.3.md
├── flujos_principales/
│   ├── creditAssessment/
│   │   ├── IsReportedAndHasCupoBrilla.prompt.2.md
│   │   └── InviteToOffice.prompt.3.md
│   ├── mainKnowledgeBase/
│   │   └── setContext.prompt.3.md
│   └── welcome/
│       ├── WelcomeMessage.prompt.1.md
│       └── DefineTransitions.prompt.1.md
├── fuentes_de_conocimiento/
│   ├── MotoKnowledgeBase/
│   │   ├── ChosenMotoMessage.prompt.1.md
│   │   ├── SearchForStyle.prompt.2.md
│   │   ├── SearchStyledMoto.prompt.2.md
│   │   ├── answerAsOwnBrand.prompt.1.md
│   │   ├── answerAsCompetitor.prompt.1.md
│   │   ├── retrieveOwnMoto.prompt.3.md
│   │   └── retrieveCompetitorMoto.prompt.3.md
│   └── LocationKnowledgeBase/
│       └── Answer.prompt.1.md
├── Location/
│   ├── retrieveServiceLocation/
│   │   └── SearchThroughIA.prompt.3.md
│   ├── retrieveUserLocation/
│   │   └── Standard1.prompt.1.md
│   ├── analyzeLocationUserInput/
│   │   ├── NoLocationFoundLog.prompt.2.md
│   │   ├── AnalyzeUserInput.prompt.3.md
│   │   └── AnalyzeUserInput.prompt.5.md
│   └── inviteToLocation/
│       └── InvitationMessage.prompt.1.md
├── Me_todo_de_compra/
│   ├── askPurchaseMethod/
│   │   └── AskForPurchaseMethod.prompt.5.md
│   ├── CashPreferenceHandle/
│   │   └── InformaPreioContado.prompt.2.md
│   ├── CreditPreferenceHandle/
│   │   └── sendMessage.prompt.1.md
│   └── OfferCashToCredit/
│       └── EvaluateConfirmation.prompt.2.md
├── Propuesta_de_cre_dito/
│   └── askForAssistanceChannel/
│       └── CatchAssistancePreferenceAnswer.prompt.4.md
├── utils/
│   ├── saveUserData/
│   │   └── save_data_client.prompt.1.md
│   ├── helpQuestion/
│   │   ├── Exit.prompt.2.md
│   │   └── help_question.prompt.2.md
│   ├── farewell/
│   │   ├── GenerateFarewellMessage.prompt.2.md
│   │   └── Timeout.prompt.2.md
│   ├── questionWithUserName/
│   │   ├── BuildMessage.prompt.1.md
│   │   └── Standard1.prompt.6.md
│   ├── askToKnowledgeBase/
│   │   └── Answer.prompt.1.md
│   ├── DataExtractor/
│   │   └── extractDataNode.prompt.2.md
│   ├── RephraseQuestion/
│   │   └── paraphraseQuestion.prompt.1.md
│   ├── UnderstandUserInput/
│   │   └── EvaluateContext.prompt.4.md
│   ├── getConfirmation/
│   │   └── EvaluateUserAnswer.prompt.4.md
│   └── AnswerType/
│       └── categorizeAnswer.prompt.3.md
└── WhatsappFlow/
    └── HandleWaResponse/
        └── EvaluateResponse.prompt.5.md
```

## Quick Navigation

Click on any prompt file to navigate directly:

### askForUserName
*Path: `Basic/askForUserName`*

**ListenTheName:** [ListenTheName.prompt.4.md](./Basic/askForUserName/ListenTheName.prompt.4.md) - *fullName*
**NamePleasantries:** [NamePleasantries.prompt.1.md](./Basic/askForUserName/NamePleasantries.prompt.1.md) - *pleasentriesMessage*

### askForUserLocation
*Path: `Basic/askForUserLocation`*

**Acknowledgement:** [Acknowledgement.prompt.1.md](./Basic/askForUserLocation/Acknowledgement.prompt.1.md) - *greetingMessage*
**Apologies:** [Apologies.prompt.1.md](./Basic/askForUserLocation/Apologies.prompt.1.md) - *untitled*

### 💾 saveUserData
*Path: `utils/saveUserData`*

**save_data_client:** [save_data_client.prompt.1.md](./utils/saveUserData/save_data_client.prompt.1.md) - *description*

### printMotoCard
*Path: `flujos_de_motos/printMotoCard`*

**PrintCard:** [PrintCard.prompt.1.md](./flujos_de_motos/printMotoCard/PrintCard.prompt.1.md) - *title, detailsURL, imageURL, formattedPrice*

### ⚠️ helpQuestion
*Path: `utils/helpQuestion`*

**Exit:** [Exit.prompt.2.md](./utils/helpQuestion/Exit.prompt.2.md) - *untitled*
**help_question:** [help_question.prompt.2.md](./utils/helpQuestion/help_question.prompt.2.md) - *message*

### MotoKnowledgeBase
*Path: `fuentes_de_conocimiento/MotoKnowledgeBase`*

**ChosenMotoMessage:** [ChosenMotoMessage.prompt.1.md](./fuentes_de_conocimiento/MotoKnowledgeBase/ChosenMotoMessage.prompt.1.md) - *foundMessage*
**SearchForStyle:** [SearchForStyle.prompt.2.md](./fuentes_de_conocimiento/MotoKnowledgeBase/SearchForStyle.prompt.2.md) - *foundMessage*
**SearchStyledMoto:** [SearchStyledMoto.prompt.2.md](./fuentes_de_conocimiento/MotoKnowledgeBase/SearchStyledMoto.prompt.2.md) - *interpretedStyle*
**answerAsOwnBrand:** [answerAsOwnBrand.prompt.1.md](./fuentes_de_conocimiento/MotoKnowledgeBase/answerAsOwnBrand.prompt.1.md) - *foundMessage*
**answerAsCompetitor:** [answerAsCompetitor.prompt.1.md](./fuentes_de_conocimiento/MotoKnowledgeBase/answerAsCompetitor.prompt.1.md) - *foundMessage*
**retrieveOwnMoto:** [retrieveOwnMoto.prompt.3.md](./fuentes_de_conocimiento/MotoKnowledgeBase/retrieveOwnMoto.prompt.3.md) - *ownReference*
**retrieveCompetitorMoto:** [retrieveCompetitorMoto.prompt.3.md](./fuentes_de_conocimiento/MotoKnowledgeBase/retrieveCompetitorMoto.prompt.3.md) - *competitorReference, ownReference*

### creditAssessment
*Path: `flujos_principales/creditAssessment`*

**IsReportedAndHasCupoBrilla:** [IsReportedAndHasCupoBrilla.prompt.2.md](./flujos_principales/creditAssessment/IsReportedAndHasCupoBrilla.prompt.2.md) - *concernMessage*
**InviteToOffice:** [InviteToOffice.prompt.3.md](./flujos_principales/creditAssessment/InviteToOffice.prompt.3.md) - *untitled*

### financialStudyMessage
*Path: `flujos_de_credito/financialStudyMessage`*

**financiera_message:** [financiera_message.prompt.3.md](./flujos_de_credito/financialStudyMessage/financiera_message.prompt.3.md) - *assessmentInvitationMsg*

### 👋 farewell
*Path: `utils/farewell`*

**GenerateFarewellMessage:** [GenerateFarewellMessage.prompt.2.md](./utils/farewell/GenerateFarewellMessage.prompt.2.md) - *farewellMessage*
**Timeout:** [Timeout.prompt.2.md](./utils/farewell/Timeout.prompt.2.md) - *farewellMessage*

### askForDocument
*Path: `brilla/askForDocument`*

**FindForData:**
- [FindForData.prompt.4.md](./brilla/askForDocument/FindForData.prompt.4.md) - *expectedData*
- [FindForData.prompt.7.md](./brilla/askForDocument/FindForData.prompt.7.md) - *answerInterpretation*


### 👤 questionWithUserName
*Path: `utils/questionWithUserName`*

**BuildMessage:** [BuildMessage.prompt.1.md](./utils/questionWithUserName/BuildMessage.prompt.1.md) - *messageResult*
**Standard1:** [Standard1.prompt.6.md](./utils/questionWithUserName/Standard1.prompt.6.md) - *inputCategory, categoryMotivation*

### ❔mainKnowledgeBase
*Path: `flujos_principales/mainKnowledgeBase`*

**setContext:** [setContext.prompt.3.md](./flujos_principales/mainKnowledgeBase/setContext.prompt.3.md) - *typeContext*

### retrieveServiceLocation
*Path: `Location/retrieveServiceLocation`*

**SearchThroughIA:** [SearchThroughIA.prompt.3.md](./Location/retrieveServiceLocation/SearchThroughIA.prompt.3.md) - *serviceLocation, outOfServiceRange*

### askForUserPhone
*Path: `Basic/askForUserPhone`*

**validateNumber:** [validateNumber.prompt.3.md](./Basic/askForUserPhone/validateNumber.prompt.3.md) - *phoneInvalid*

### getPopAuthorization
*Path: `Basic/getPopAuthorization`*

**makeQuestion:** [makeQuestion.prompt.6.md](./Basic/getPopAuthorization/makeQuestion.prompt.6.md) - *authorizedPop*
**handleResult:** [handleResult.prompt.2.md](./Basic/getPopAuthorization/handleResult.prompt.2.md) - *popThanksMessage*

### retrieveUserLocation
*Path: `Location/retrieveUserLocation`*

**Standard1:** [Standard1.prompt.1.md](./Location/retrieveUserLocation/Standard1.prompt.1.md) - *greetingMessage*

### analyzeLocationUserInput
*Path: `Location/analyzeLocationUserInput`*

**NoLocationFoundLog:** [NoLocationFoundLog.prompt.2.md](./Location/analyzeLocationUserInput/NoLocationFoundLog.prompt.2.md) - *outOfServiceRange*
**AnalyzeUserInput:**
- [AnalyzeUserInput.prompt.3.md](./Location/analyzeLocationUserInput/AnalyzeUserInput.prompt.3.md) - *location*
- [AnalyzeUserInput.prompt.5.md](./Location/analyzeLocationUserInput/AnalyzeUserInput.prompt.5.md) - *serviceLocation, context*


### inviteToLocation
*Path: `Location/inviteToLocation`*

**InvitationMessage:** [InvitationMessage.prompt.1.md](./Location/inviteToLocation/InvitationMessage.prompt.1.md) - *serviceLocationInfo*

### ✨ askToKnowledgeBase
*Path: `utils/askToKnowledgeBase`*

**Answer:** [Answer.prompt.1.md](./utils/askToKnowledgeBase/Answer.prompt.1.md) - *answerMessage*

### askForAssistanceChannel
*Path: `Propuesta_de_cre_dito/askForAssistanceChannel`*

**CatchAssistancePreferenceAnswer:** [CatchAssistancePreferenceAnswer.prompt.4.md](./Propuesta_de_cre_dito/askForAssistanceChannel/CatchAssistancePreferenceAnswer.prompt.4.md) - *assistanceMode*

### askForReportedStatus
*Path: `flujos_de_credito/askForReportedStatus`*

**MadeQuestion:** [MadeQuestion.prompt.4.md](./flujos_de_credito/askForReportedStatus/MadeQuestion.prompt.4.md) - *negativeCreditReport*

### askForJobContractType
*Path: `flujos_de_credito/askForJobContractType`*

**UnderstandAnswer:** [UnderstandAnswer.prompt.4.md](./flujos_de_credito/askForJobContractType/UnderstandAnswer.prompt.4.md) - *jobContractType*

### askPurchaseMethod
*Path: `Me_todo_de_compra/askPurchaseMethod`*

**AskForPurchaseMethod:** [AskForPurchaseMethod.prompt.5.md](./Me_todo_de_compra/askPurchaseMethod/AskForPurchaseMethod.prompt.5.md) - *purchasePreference*

### CashPreferenceHandle
*Path: `Me_todo_de_compra/CashPreferenceHandle`*

**InformaPreioContado:** [InformaPreioContado.prompt.2.md](./Me_todo_de_compra/CashPreferenceHandle/InformaPreioContado.prompt.2.md) - *priceInfoMessage*

### ⭐️ welcome
*Path: `flujos_principales/welcome`*

**WelcomeMessage:** [WelcomeMessage.prompt.1.md](./flujos_principales/welcome/WelcomeMessage.prompt.1.md) - *fullName, welcomeMessage*
**DefineTransitions:** [DefineTransitions.prompt.1.md](./flujos_principales/welcome/DefineTransitions.prompt.1.md) - *transition*

### askForNationalId
*Path: `brilla/askForNationalId`*

**Reassurance:** [Reassurance.prompt.3.md](./brilla/askForNationalId/Reassurance.prompt.3.md) - *reassuranceMessage*

### askForBillNumber
*Path: `brilla/askForBillNumber`*

**Reassurance:** [Reassurance.prompt.3.md](./brilla/askForBillNumber/Reassurance.prompt.3.md) - *reassuranceMessage*

### CupoBrillaProfile
*Path: `flujos_de_credito/CupoBrillaProfile`*

**notifyPriceChange:** [notifyPriceChange.prompt.2.md](./flujos_de_credito/CupoBrillaProfile/notifyPriceChange.prompt.2.md) - *untitled*

### CreditPreferenceHandle
*Path: `Me_todo_de_compra/CreditPreferenceHandle`*

**sendMessage:** [sendMessage.prompt.1.md](./Me_todo_de_compra/CreditPreferenceHandle/sendMessage.prompt.1.md) - *purchaseMethodInfoMessage*

### 🏍️ RetrieveMoto
*Path: `flujos_de_motos/RetrieveMoto`*

**searchingFor:** [searchingFor.prompt.3.md](./flujos_de_motos/RetrieveMoto/searchingFor.prompt.3.md) - *interestedProduct*

### 🔎 DataExtractor
*Path: `utils/DataExtractor`*

**extractDataNode:** [extractDataNode.prompt.2.md](./utils/DataExtractor/extractDataNode.prompt.2.md) - *phone, location, fullName, assistanceMode, nationalID, brillaBillNumber, interestedProduct, purchasePreference, jobContractType, authorizedPop, negativeCreditReport*

### ✏️ RephraseQuestion
*Path: `utils/RephraseQuestion`*

**paraphraseQuestion:** [paraphraseQuestion.prompt.1.md](./utils/RephraseQuestion/paraphraseQuestion.prompt.1.md) - *lastQuestionMade*

### 🧠 UnderstandUserInput
*Path: `utils/UnderstandUserInput`*

**EvaluateContext:** [EvaluateContext.prompt.4.md](./utils/UnderstandUserInput/EvaluateContext.prompt.4.md) - *context*

### 👂 getConfirmation
*Path: `utils/getConfirmation`*

**EvaluateUserAnswer:** [EvaluateUserAnswer.prompt.4.md](./utils/getConfirmation/EvaluateUserAnswer.prompt.4.md) - *confirmationType*

### 🗣️ AnswerType
*Path: `utils/AnswerType`*

**categorizeAnswer:** [categorizeAnswer.prompt.3.md](./utils/AnswerType/categorizeAnswer.prompt.3.md) - *answerType*

### RetrieveMotoStyle
*Path: `Estilos_de_motos/RetrieveMotoStyle`*

**SearchForStyle:** [SearchForStyle.prompt.6.md](./Estilos_de_motos/RetrieveMotoStyle/SearchForStyle.prompt.6.md) - *motoList*
**generateStyleOptionList:** [generateStyleOptionList.prompt.3.md](./Estilos_de_motos/RetrieveMotoStyle/generateStyleOptionList.prompt.3.md) - *stlyeMenuOfferMessage*

### HandleOptionList
*Path: `Estilos_de_motos/HandleOptionList`*

**ValidateExistence:** [ValidateExistence.prompt.2.md](./Estilos_de_motos/HandleOptionList/ValidateExistence.prompt.2.md) - *interestedProduct*
**handleFailure:** [handleFailure.prompt.2.md](./Estilos_de_motos/HandleOptionList/handleFailure.prompt.2.md) - *interestedProduct*

### LocationKnowledgeBase
*Path: `fuentes_de_conocimiento/LocationKnowledgeBase`*

**Answer:** [Answer.prompt.1.md](./fuentes_de_conocimiento/LocationKnowledgeBase/Answer.prompt.1.md) - *serviceLocationInfo*

### OfferCashToCredit
*Path: `Me_todo_de_compra/OfferCashToCredit`*

**EvaluateConfirmation:** [EvaluateConfirmation.prompt.2.md](./Me_todo_de_compra/OfferCashToCredit/EvaluateConfirmation.prompt.2.md) - *creditInfoMessage*

### HandleWaResponse
*Path: `WhatsappFlow/HandleWaResponse`*

**EvaluateResponse:** [EvaluateResponse.prompt.5.md](./WhatsappFlow/HandleWaResponse/EvaluateResponse.prompt.5.md) - *responseConfirmation*

## Workflows Without AI Prompts

These workflows were processed but contained no AI prompt instructions:

- **Error** (`Error`)
- **Timeout** (`Timeout`)
- **Conversation End** (`Conversation_End`)
- **Main** (`Main`)
- **productDetailsFollowUp** (`flujos_de_motos/productDetailsFollowUp`)
- **askForCreditInterest** (`Propuesta_de_cre_dito/askForCreditInterest`)
- **User Info Form** (`flujos_principales/User_Info_Form`)
- **setConversationContext** (`utils/setConversationContext`)
- **requestInterestedMoto** (`flujos_de_motos/requestInterestedMoto`)
- **motoStyleFlow** (`Estilos_de_motos/motoStyleFlow`)
- **askIfUserHasCupoBrilla** (`flujos_de_credito/askIfUserHasCupoBrilla`)
- **HandleMultimediaMessage** (`WhatsappFlow/HandleMultimediaMessage`)
- **EvaluateAskingUserData** (`flujos_de_motos/EvaluateAskingUserData`)
- **HandleUniqMotoOption** (`Estilos_de_motos/HandleUniqMotoOption`)
- **☑️ ValidateAttempts** (`utils/ValidateAttempts`)
- **Get_InterestedProduct** (`flujos_de_motos/Get_InterestedProduct`)
- **ValidatePurchasePreference** (`utils/ValidatePurchasePreference`)
- **🟢 StartWaConversation** (`WhatsappFlow/StartWaConversation`)
- **SyncUserData** (`WhatsappFlow/SyncUserData`)
- **💾 saveHookedUserData** (`utils/saveHookedUserData`)
- **StopPromotions** (`WhatsappFlow/StopPromotions`)
- **🄽 NotionClient ** (`Notion/N_NotionClient`)

---

*This index was automatically generated by the bot-prompt-extractor utility.*
