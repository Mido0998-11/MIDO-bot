```python
import datetime

start_time = datetime.datetime.now()

def update_bio():
    end_time = datetime.datetime.now()
    work_duration = end_time - start_time
    hours, remainder = divmod(work_duration.total_seconds(), 3600)
    return f"وقت العمل: {int(hours)} ساعة و{int(remainder // 60)} دقيقة"
```
