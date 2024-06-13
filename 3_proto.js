function AnimalMedicalRecord(params) {
  this.animalName = params?.animalName ? params.animalName : "no-data";
  this.animalAge = params?.animalAge ? params.animalAge : "no-data";
  this.animalGender = params?.animalGender ? params.animalGender : "no-data";
  this.lastMedicalDate = null;
}

AnimalMedicalRecord.prototype.startMedical = function () {
  this.startMedical = function () {
    const startTiem = this.getCurrentTime();
    this.lastMedicalDate = startTiem;
    console.log("Start Medical Time: ", startTiem);
  };
};

AnimalMedicalRecord.prototype.saveMedical = function () {
  this.saveMedical = function () {
    const saveData = {
      animalName: this.animalName,
      animalAge: this.animalAge,
      animalGender: this.animalGender,
      lastMedicalDate: this.lastMedicalDate,
    };
    console.log("save 되었습니다");
    console.log(saveData);
  };
};

AnimalMedicalRecord.prototype.getCurrentTime = function () {
  this.getCurrentTime = function () {
    const date = new Date();
    return `${date.getFullYear()}.${
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1
    }.${
      date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
    } ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };
};
function loadData(search) {
  if (search === "뽀삐") {
    return {
      animalName: "뽀삐",
      animalAge: 3,
      animalGender: "male",
    };
  } else if (search === "초코") {
    return {
      animalName: "초코",
      animalAge: 2,
      animalGender: "male",
    };
  }
}

const client = new AnimalMedicalRecord(loadData("뽀삐"));
client.startMedical();
client.saveMedical();
